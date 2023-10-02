"use client"

import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import dotenv from 'dotenv';
import Loader from '@/app/loader';

dotenv.config();

const MapContainer = () => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);

    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLEMAPSKEY;
    
    const handleLocationPermission = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                const userLatLng = { lat: latitude, lng: longitude };
                setUserLocation(userLatLng);
                if (map) {
                    map.setCenter(userLatLng);
                }
            });
        } else {
            alert('Seu navegador não suporta geolocalização.');
        }
    };
    

    useEffect(() => {
        handleLocationPermission();
    }, [map]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${googleMapsApiKey}`
    })

    const onLoad = (map: google.maps.Map) => {
        setMap(map);
    };

    const onUnmount = () => {
        setMap(null);
    };

    return (
        <>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '300px', borderRadius: '20px', }}
                    center={userLocation || { lat: 0, lng: 0 }}
                    zoom={18}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    {userLocation && (
                        <Marker
                            position={userLocation}
                            visible={true}
                        >
                            <InfoWindow position={userLocation}>
                                <div>
                                    <h2>Localização do Usuário</h2>
                                    <p>Latitude: {userLocation.lat}</p>
                                    <p>Longitude: {userLocation.lng}</p>
                                </div>
                            </InfoWindow>
                        </Marker>
                    )}
                </GoogleMap>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MapContainer;
