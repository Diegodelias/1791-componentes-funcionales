import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import {
    useState,
    useEffect,
} from "react"


function FormSignUp({ handleSubmit }) {
   
    const [name, setName] = useState("")
    const [lastName, setLastName] =
        useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit({name,lastName,email, prom,nov})
        }}>

            <TextField
                id="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => {
                    setName(e.target.value)
                }}
                value={name}
                error
                helperText="Deben ser al menos 3 caracteres"
            />

            <TextField
                id="lastName"
                label="Apellidos"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />

            <label>Promociones</label>
            <FormGroup>
                <FormControlLabel control={
                    <Switch label="Promociones" checked={prom} onChange={(e)=> setProm(e.target.checked)} />

                } label="Promociones" />

                <label>Novedades</label>
                <input type="checkbox" />

                <FormControlLabel
                    control={
                        <Switch checked={nov} onChange={(e) => setNov(e.target.checked)} />
                    }
                    label="Novedades"
                />
            </FormGroup>
            <Button variant="contained"
            type="submit"
			>
            
                Registrarse
            </Button>
        </form>
    )
}

export default FormSignUp