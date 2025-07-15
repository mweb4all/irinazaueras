import {
  AppBar,
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  LinearProgress
} from "@mui/material";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import { Copyright } from "./components/Copyright";
import { SocialMediaProps, SocialMedia } from "./components/SocialMedia";
import { OpeningTimes } from "./components/OpeningTimes";
import { rem } from "polished";
import { ContactUsForm } from "./components/ContactUsForm";
import { black, cream } from "./components/Colours";
import { LinkButton } from "./components/LinkButton";
import { useState, useEffect } from "react";
// michael.web4all@gmail.com

const welcomeMessage = "Welcome to Irina Zaueras Hair Design";

const tableData = {
  headers: ["Service", "Price"],
  services: [
    { name: "Basic Haircut", price: "£20" },
    { name: "Styled Haircut", price: "£35" },
    { name: "Kids' Haircut", price: "£15" },
    { name: "Hair Coloring", price: "£50" },
    { name: "Hair Treatment", price: "£40" },
  ],
};

const infoParagraphs = [
"Welcome to Irina’s professional unisex salon — where vibrant colours, healthy hair, and expert styling come together.",
"District Top 10 Winner for Best For Blonde — your hair is in award-winning hands.",
"Free consultations available — discover your perfect shade or style with confidence."
];



const socialLinks: SocialMediaProps["socialLinks"] = {
  facebook: "https://www.facebook.com/irinazaueras/",
  twitter: null,
  instagram: "https://www.instagram.com/zaueras.hairstyle/",
};

const openingTimes = {
  Monday: { open: "Closed", close: "Closed" },
  Tuesday: { open: "09:00", close: "17:00" },
  Wednesday: { open: "09:00", close: "20:00" },
  Thursday: { open: "09:00", close: "18:00" },
  Friday: { open: "09:00", close: "18:00" },
  Saturday: { open: "08:00", close: "17:00" },
  Sunday: { open: "Closed", close: "Closed" },
};

const pageTitle = "Irina Zaueras Hair Design";
const secondaryTitle = "Lincoln"

const templateName = "irinazaueras";

const mainBackgroundImage = `url(/${templateName}/irinaBackgroundImage.jpg)`;

const number = "07427 238010";

const googleMap =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2388.3415659199104!2d-0.5425291!3d53.229653199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48785b2507e3caf5%3A0x99fb16fa4a743c08!2s5-9%20Newland%2C%20Lincoln%20LN1%201UY!5e0!3m2!1sen!2suk!4v1752250872854!5m2!1sen!2suk";

const shadowOffset = 2;


const collageUrl = `url(/${templateName}/irinacollage.jpg)`;

export const Config = () => {
  const [isLoading, setIsLoading] = useState(true);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const pricingSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <LinearProgress
          sx={{ width: rem(200), height: rem(10), borderRadius: 5, backgroundColor: "black", ".MuiLinearProgress-bar": {backgroundColor: "grey"}}}
          />
      </Box>
    );
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <AppBar
        position="static"
        color="default"
        sx={{ backgroundColor: "white", py: {sm: 0.5} }}
      >
        <Toolbar>
          <Stack sx={{flexDirection: "column", flex: 1}}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mr: 0.5,
                flexGrow: 1,
                color: black,
                fontFamily: "Dancing Script",
                fontSize: { xs: "1.4rem", sm: "2.5rem" },
                lineHeight: { xs: "1.4rem", sm: "2.5rem" },
                fontWeight: "bold",
              }}
            >
              {pageTitle}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                mr: 0.5,
                flexGrow: 1,
                color: black,
                fontFamily: "Dancing Script",
                fontSize: { xs: "0.7rem", md: "1.4rem" },
                lineHeight: { xs: "0.7rem", md: "1.4rem" },
                fontWeight: "bold",
              }}
            >
              {secondaryTitle}
            </Typography>
          </Stack>
          <SocialMedia socialLinks={socialLinks} />
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        sx={{ background: "white", borderTop: `${rem(2)} solid ${cream}` }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexDirection:{xs: "column", md: "row"}, gap: {xs: 1, md: 0},my: {xs: 1.5, md: 0} }}>
          <Stack sx={{ flexDirection: "row"}}>
            <Typography
              sx={{
                color: black,
                fontWeight: "bold",
                mr: 0.5,
                fontSize: { xs: "0.8rem", md: "1.3rem" },
                textDecoration: "none",
              }}
            >
              Book now:
            </Typography>
            <Typography
              component="a"
              href={`tel:${number}`}
              sx={{
                color: black,
                fontWeight: "bold",
                fontSize: { xs: "0.8rem", md: "1.3rem" },
                textDecoration: "none",
              }}
            >
              {number}
            </Typography>
          </Stack>
          <Stack flexDirection="row" justifyContent="space-between">
            <LinkButton ref={pricingSectionRef} title="Pricing" />
            <LinkButton ref={contactSectionRef} title="Opening Times" />
            <LinkButton ref={contactSectionRef} title="Contact Us" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: { xs: rem(300), md: rem(470) },
          backgroundImage: mainBackgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 1,
          }}
        />
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "2rem", md: "3rem", lg: "5rem" },
            fontFamily: "Lexend",
            textShadow: `-${shadowOffset}px -${shadowOffset}px 0 #000, ${shadowOffset}px -${shadowOffset}px 0 #000, -${shadowOffset}px ${shadowOffset}px 0 #000, ${shadowOffset}px ${shadowOffset}px 0 #000;`,
            zIndex: 2, // Ensure text is above the overlay
          }}
        >
          {welcomeMessage}
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Stack
          ref={pricingSectionRef}
          sx={{
            height: "max-content",
            alignItems: "center",
            justifyContent: "center",
            borderTop: `${rem(4)} solid ${cream}`,
            borderBottom: `${rem(4)} solid ${cream}`,
            backgroundColor: "white",
            px: { xs: 1, md: 4 },
            py: { xs: 2, md: 3 },
            color: black,
          }}
        >
          {infoParagraphs.map((paragraph, index) => (
            <Typography key={index} variant="body1" sx={{ mb: 1, textAlign: "center" }}>
              {paragraph}
            </Typography>
          ))}
          <Typography variant="h4" sx={{ mb: 2 }}>
            Our Prices
          </Typography>
          <Stack
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >

            <Stack
              sx={{
                width: { xs: "85%", md: rem(800) },
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: 3,
              }}
            >
              <Box sx={{ overflowX: "auto" }}>
                <Table sx={{"td, th": {p: {xs: 1.5, md: 2}}}}>
                  <TableHead>
                    <TableRow>
                      {tableData.headers.map((header, index) => (
                        <TableCell
                          key={index}
                          align={index === 0 ? "left" : "right"}
                          sx={{
                            fontWeight: "bold",
                            borderBottom: "2px solid #ccc",
                          }}
                        >
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.services.map((service, index) => (
                      <TableRow key={index} >
                        <TableCell
                          sx={{
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {service.name}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            borderBottom: "1px solid #eee",
                          }}
                        >
                          {service.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            margin: "auto",
            my: 1,
            width: {xs: "80%", lg: "1200px"},
            aspectRatio: "2 / 0.8",
            backgroundImage: collageUrl,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Stack
          ref={contactSectionRef}
          sx={{
            height: "max-content",
            justifyContent: "center",
            backgroundColor: cream,
            padding: {xs: 2, md: 3, lg: 4},
          }}
        >
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"center"}
            gap={2}
          >
            <ContactUsForm sx={{ flex: 1 }} />
            <OpeningTimes sx={{ flex: 1 }} openingTimes={openingTimes} />
          </Stack>
          <Box
            sx={{
              width: "100%",
              height: "400px",
              mt: 4,
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              title="Google Map"
              src={googleMap}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </Box>
        </Stack>
      </Box>
      <Copyright />
    </>
  );
};
