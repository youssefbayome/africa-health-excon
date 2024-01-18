import React from 'react';
import { CiFacebook, CiLinkedin, CiYoutube } from 'react-icons/ci';
import { FaInstagram } from "react-icons/fa";

export const navigaitionLinks = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'Exihipt',
        hash: '#exhipt',
    },
    {
        name: 'Travel',
        hash: '#travel',
    },
    {
        name: 'Media',
        hash: '#media',
    },
    {
        name: 'Confrence',
        hash: '#confrence',
    },
]
export const socialLinks = [
    {
        title: 'facebook',
        icon: React.createElement(CiFacebook),
    },
    {
        title: 'instagram',
        icon: React.createElement(FaInstagram),
    },
    {
        title: 'linkedin',
        icon: React.createElement(CiLinkedin),
    },
    {
        title: 'youtube',
        icon: React.createElement(CiYoutube),
    },
]

export const UPASocials = [
    {
        title: 'facebook',
        icon: React.createElement(CiFacebook),
    },
    {
        title: 'facebook',
        icon: React.createElement(CiFacebook),
    },
];

export const Locations = [
    { title: 'Al Manara International Conference Center', location: 'Egypt International Exhibition Center (EIEC ) - cairo, egypt' }
    , { title: 'The St. Regis Almasa Hotel, Cairo', location: 'New Administrative Capital' }
]

export const RegistrationLinks = [
    { title: 'EXHIBIT AT EXCON' },
    { title: 'REGISTER AS A SPONSOR' },
    { title: 'REGISTER AS A VISITOR' },
    { title: 'International Buyers' },
]