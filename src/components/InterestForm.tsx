import { useState, type FormEvent } from "react"
import { Card,
         Box, 
         CardContent, 
         Button, 
         Typography,
        TextField, 
        FormControl,
        type SelectChangeEvent,
        FormLabel,
        RadioGroup,
        FormControlLabel,
        Radio} from "@mui/material"
import { MuiTelInput } from "mui-tel-input";
import linenBackground from "../assets/linenBackground.avif";
import { featureOptions } from "../core/mostImportantFeatureOptions";
import { userBudgetOptions } from "../core/userBudgetOptions";

export default function InterestForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [userBudget, setUserBudget] = useState("");
  const [mostImporantFeature, setMostImportantFeature] = useState("");
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      emailAddress: emailAddress,
      userBudget,
      mostImporantFeature
    };

    const jsonifiedData = JSON.stringify(formData);

    console.log(jsonifiedData);

    e.preventDefault();
  }

  const handleBudgetChange = (e: SelectChangeEvent) => {
    setUserBudget(e.target.value as string);
  }

  const handleMostImportantFeatureChange = (e: SelectChangeEvent) => {
    setMostImportantFeature(e.target.value as string);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(pattern.test(e.target.value as string));
    setEmailAddress(e.target.value);
  }

  const handleEmailBlur = () => {
    setEmailBlurred(true);
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(emailAddress)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }
  
  return (
    <Box sx={{ 
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      backgroundImage: `url(${linenBackground})`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
      alignItems: "center",
      overflow: "hidden",
      padding: 4
     }}>
      <Card sx={{
        backgroundColor: "#fff7ed",
        border: "2px solid #a17c5e",
        borderRadius: "20px",
        boxShadow: "4px 6px 15px rgba(0, 0, 0, 0.15)",
        padding: 4,
        width: "100%",
        maxWidth: "600px",
        maxHeight: "90vh",
        fontFamily: "'Merriweather', serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        <CardContent
          sx={{
            padding: 4,
            overflowY: "auto"
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ 
            color: "#4a2d16", 
            fontWeight: 700,
            justifyContent: "center", 
            fontFamily: "'Playfair Display', serif", 
            textAlign: "center",
            whiteSpace: "pre-line",
            marginBottom: 2 
          }}>
            {"Join the\nDan's Country Cookware\nAir Fryer Beta"}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ 
            fontStyle: "italic", 
            color: "#4a2d16", 
            fontWeight: 400, 
            fontFamily: "'Lora', serif", 
            textAlign: "center",
            whiteSpace: "pre-line",
            marginBottom: 2 
          }}>
            {"Built for folks who believe\nevery kitchen deserves a little extra sizzle."}
          </Typography>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem"}}>
            <TextField
              sx={{ 
                backgroundColor: "white",
                borderColor: "#a17c5e"
              }}
              variant="filled"
              label="First Name"
              name="firstName"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              sx={{ 
                backgroundColor: "white",
              }}
              variant="filled"
              label="Last Name"
              name="lastName"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
            <MuiTelInput
              sx={{ 
                backgroundColor: "white"
              }}
              variant="filled"
              value={phone}
              onChange={setPhone}
              defaultCountry="US"
              label="Phone Number"
              fullWidth
            />
            <TextField
              sx={{ 
                backgroundColor: "white",
              }}
              variant="filled"
              label="Email Address"
              name="emailAddress"
              id="emailAddress"
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              error={!!emailError && emailBlurred}
              helperText={emailBlurred && emailError ? emailError : " "}
            />
            
            <Typography variant="h6"sx={{
              fontFamily: "'Lora', serif",
              color: "#4a2d16", 
              fontWeight: 400,
              textAlign: "center", 
              marginBottom: 2 
            }}>
              What matters most to you?
            </Typography>

            <FormControl>
              <FormLabel id="user-budget">Typical Appliance Budget</FormLabel>
              <RadioGroup
                row
                aria-labelledby="appliance-budget-radio-button-label"
                name="appliance-budget"
                onChange={handleBudgetChange}
              >
                {userBudgetOptions.map((option, index) => (
                  <FormControlLabel key={index} value={option} control={<Radio/>} label={option}/>
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel id="most-important-feature">Most Important Feature</FormLabel>
              <RadioGroup
                row
                aria-labelledby="most-important-feature-radio-button-label"
                name="most-important-feature"
                onChange={handleMostImportantFeatureChange}
              >
                {featureOptions.map((option, index) => (
                  <FormControlLabel key={index} value={option} control={<Radio/>} label={option}/>
                ))}
              </RadioGroup>
            </FormControl>

            <div style={{ textAlign: "center" }}>
              <Button type="submit" sx={{ 
                backgroundColor: "#9d2235",
                width: 400
              }}>
                <Typography sx={{
                  color: "white",
                  fontFamily: "'Merriweather', serif"
                }}>
                  Count Me In!
                </Typography>
                </Button>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </Box>
    
  )
}