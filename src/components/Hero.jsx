import React from "react";
import { useRef, useState, useEffect } from "react";
// Styles
import styled, { keyframes } from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import Logo from "../images/logo.svg";
import Logo1 from "../images/logo1.svg";
import Logo2 from "../images/logo2.svg";
import Logo3 from "../images/logo3.svg";
import Logo4 from "../images/logo4.svg";
import Logo5 from "../images/logo5.svg";
import Logo6 from "../images/logo6.svg";
import Logo7 from "../images/logo7.svg";
import Logo8 from "../images/logo8.svg";
import Logo9 from "../images/logo9.svg";

import { Light, Dark } from "../config";
import { resume } from "../config"; // عدّل المسار حسب مكان الملف
// Components
import { useErrorBoundary } from "react-error-boundary";
import { Link } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
import { info } from "../config";

// #region styled-components
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
    theme.name === "light"
      ? "linear-gradient(135deg, var(--bs-primary), var(--bs-light))"
      : "linear-gradient(135deg, var(--bs-primary), var(--bs-dark))"};
    z-index: -2;
    filter: blur(5px);
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
    theme.name === "light"
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.2)"};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-images-container {
      width: 100%;
      height: 400px; /* ارتفاع الحاوية */
      position: relative; /* لتحديد مواضع الصور بشكل مطلق */
    }

    .hero-img-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%; /* يجعل الصورة دائرية */
      object-fit: cover; /* لتجنب تشويه الصورة */
      position: absolute; /* لتتمكن من توزيعها داخل الحاوية */
      transition: transform 0.3s; /* اختيارياً للحركة عند hover */
    }

    .hero-img-circle:hover {
      transform: scale(1.2); /* تكبير الصورة عند المرور */
    }
  }

  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
    theme.name === "light"
      ? `url(${Light}) top center fixed no-repeat`
      : `url(${Dark}) top center fixed no-repeat`};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: ${({ theme }) =>
    theme.name === "light"
      ? `url(${Light}) center center fixed no-repeat`
      : `url(${Dark}) center center fixed no-repeat`};
      background-size: cover;
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  name: PropTypes.string,
};

const Hero = ({ name }) => {
  const { showBoundary } = useErrorBoundary();
  const logos = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

  const radius = 150; // نصف قطر الدائرة حول الصورة المركزية
  const containerSize = 400; // حجم الحاوية
  const center = containerSize / 2; // مركز الحاوية

  const anglesRef = useRef(logos.map((_, i) => (i / logos.length) * 2 * Math.PI)); // الزوايا الابتدائية

  const [tick, setTick] = useState(0); // لتحديث الحركة

  useEffect(() => {
    let animationFrame;

    const rotate = () => {
      // زيادة الزوايا لكل صورة
      anglesRef.current = anglesRef.current.map(angle => angle + 0.01); // السرعة
      setTick(prev => prev + 1); // لإعادة render
      animationFrame = requestAnimationFrame(rotate);
    };

    rotate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="mb-3 display-3 title">
              {name === null ? "null" : name}
            </h1>
            <Container>
              <p>SOFTWARE ENGINEER | FLUTTER & WEB DEVELOPER | INTERACTIVE SOLUTIONS</p>
            </Container>
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks />
            </div>
            {resume && (
              <a
                href={resume}
                download="Mohammed-Alansi_CV.pdf"
                className="btn btn-outline-light mt-3 px-4 py-2"
                style={{ borderRadius: "30px" }}
              >
                Download CV
              </a>
            )}
          </Col>
          <div
            className="d-none d-md-block position-relative"
            style={{ width: `${containerSize}px`, height: `${containerSize}px`, margin: "0 auto" }}
          >
            {/* الصورة المركزية */}
            <img
              src={Logo9}
              alt="Center Logo"
              style={{
                position: "absolute",
                top: `${center - 80}px`,
                left: `${center - 80}px`,
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />

            {/* الصور الصغيرة */}
            {logos.map((logo, index) => {
              const angle = anglesRef.current[index];
              const x = center + radius * Math.cos(angle) - 30;
              const y = center + radius * Math.sin(angle) - 30;

              return (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${index}`}
                  className="hero-img-circle"
                  style={{
                    position: "absolute",
                    top: `${y}px`,
                    left: `${x}px`,
                    width: "60px",
                    height: "60px",
                  }}
                />
              );
            })}
          </div>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row>
        <Button
          className="d-none"
          onClick={() =>
            showBoundary({
              name: "Error",
              message: "Simulated error message",
            })
          }
        >
          Simulate Error Boundary
        </Button>
      </Container>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
