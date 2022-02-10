import { useEffect, useState } from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from './api/index'

import Header from "@components/Header/Header";
import List from "@components/List/List";
import Map from "@components/Map/Map";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { lattitude, longitute } }) => {
      setCoordinates({ lat: lattitude, lng: longitute })
    })
  }, [])

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data)
      console.log(data);
    });
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}><List /></Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            cordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
