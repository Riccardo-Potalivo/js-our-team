"use strict";

myScript();
function myScript()
{
    // array dati team
    const ourTeam =
    [
        {
            name: 'Wayne Barnett',
            Role: 'Founder & CEO',
            picture: 'wayne-barnett-founder-ceo.jpg'
        },
        {
            name: 'Angela Caroll',
            Role: 'Chief Editor',
            picture: 'angela-caroll-chief-editor.jpg'
        },
        {
            name: 'Walter Gordon',
            Role: 'Office Manager',
            picture: 'walter-gordon-office-manager.jpg'
        },
        {
            name: 'Angela Lopez',
            Role: 'Social Media Manager',
            picture: 'angela-lopez-social-media-manager.jpg'
        },
        {
            name: 'Scott Estrada',
            Role: 'Developer',
            picture: 'scott-estrada-developer.jpg'
        },
        {
            name: 'Barbara Ramos',
            Role: 'Graphic Designer',
            picture: 'barbara-ramos-graphic-designer.jpg'
        }
    ]

    for (let i = 0; i < ourTeam.length; i++)
    {
        console.group();
        console.log("Name: " + ourTeam[i].name);
        console.log("Role: " + ourTeam[i].Role);
        console.log("Picture: " + ourTeam[i].picture);
        console.groupEnd();
    }

}

