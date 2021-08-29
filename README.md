### Rest API med Express

Jag först började med att dela upp all kod i olika 
filer så att det skulle vara så snyggt och fint som
möjlighet.

Jag ville göra en gammaldags vapen förråd där man kan se vad vapnen heter, vad för type är vapnet och dens varaktighet.

Alla krav för godkänt har jag avklarat där jag har 5 st endpoints för denna resursen, alla endpoints kan nås via REST Clienten, datan sparas lokalt i server filen Git & GitHub har användis och det finns en readme fill.

Projektet använder några node_modules som du bör installera efter det kan dör köra programmet med 
npm start i server.rest kan du finns det några metoder och längst ner i denna fillen kommer jag ha en template för alla metoder.

### Template

GET http://localhost:3000/api/weapons

###

GET http://localhost:3000/api/weapons/?

###

POST http://localhost:3000/api/weapons
Content-Type: application/json

{
    "name": "åtminståne 3 charaktärer",
    "type": "åtminståne 2 charaktärer",
    "durability": "åtminståne 1 charaktärer"
}

###

PUT http://localhost:3000/api/weapons/?
Content-Type: application/json

{
    "name": "åtminståne 3 charaktärer",
    "type": "åtminståne 2 charaktärer",
    "durability": "åtminståne 1 charaktärer"
}

###

DELETE http://localhost:3000/api/weapons/1

Ardi Grapci.