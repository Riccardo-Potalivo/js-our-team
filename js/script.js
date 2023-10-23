"use strict";

myScript();
function myScript()
{
    const row = document.querySelector('.row');
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

        card()
    }

    function card()
    {
        // creo il contenitore della card
        const col = document.createElement('div');
        row.append(col)
        col.classList.add('col-4', 'pt-4')
        // contenuto della card
        const cardLayout =
        `
        <div class="card text-center">
            <img src="img/angela-caroll-chief-editor.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h6 class="card-title">Name</h6>
                <p class="card-text">Role</p>
            </div>
        </div>
        `
        col.innerHTML = cardLayout;
    }

}

