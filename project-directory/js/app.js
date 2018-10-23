'use strict'

let cityraised = prompt('Did Hannah grow up in DC?')

console.log(cityraised, ', Hannah grew up in DC.')

if(cityraised.toLowerCase() === 'yes' ||
cityraised.toUpperCase() === 'YES' ||
cityraised.toLowerCase() === 'y' ||
cityraised.toUpperCase() === 'Y')
  alert(cityraised + ', that is correct! Although Hannah was born in Silver Spring, MD, she grew up in Northwest, Washington, DC from infancy through secondary school. She graduated from School Without Walls SHS of DC public schools.')
 else {
  alert(cityraised + ', that is not correct. Although Hannah was born in Silver Spring, MD, she grew up in Northwest, Washington, DC from infancy through secondary school. She graduated from School Without Walls SHS of DC public schools.')
}

let countrieslived = prompt('Has Hannah lived in 5 different countries?')

console.log(countrieslived + ', Hannah has lived in 5 different countries.')

if(countrieslived.toLowerCase() === 'yes' ||
countrieslived.toUpperCase() === 'YES' ||
countrieslived.toLowerCase() === 'y' ||
countrieslived.toUpperCase() === 'Y')
  alert(countrieslived + ', that is correct! Hannah has lived in 5 countries. She grew up in the US. She studied in both France (high school) and Switzerland (undergraduate). She has also worked in the former-Soviet republic of Georgia and Nigeria.')
  else {
   alert(countrieslived + ', that is not correct. Hannah has lived in 5 countries. She grew up in the US. She studied in both France (high school) and Switzerland (undergraduate). She has also worked in the former-Soviet republic of Georgia and Nigeria.')
 }

 let hasdaughter = prompt('Does Hannah have a daughter?')

 console.log(hasdaughter + ', Hannah has a daughter.')
 
 if(hasdaughter.toLowerCase() === 'yes' ||
 hasdaughter.toUpperCase() === 'YES' ||
 hasdaughter.toLowerCase() === 'y' ||
 hasdaughter.toUpperCase() === 'Y')
   alert(hasdaughter + ', that is correct! Hannah has one daughter. Her name is Nessa and she is 2 years old.')
   else {
    alert(hasdaughter + ', that is not correct. Hannah has one daughter. Her name is Nessa and she is 2 years old.')
   }

let hassisters = prompt('Does Hannah have three sisters?')

 console.log(hassisters + ', Hannah has three sisters.')
 
 if(hassisters.toLowerCase() === 'yes' ||
 hassisters.toUpperCase() === 'YES' ||
 hassisters.toLowerCase() === 'y' ||
 hassisters.toUpperCase() === 'Y')
   alert(hassisters + ', that is correct! Hannah has three sisters. She is the oldest of 4 daughters.')
   else {
    alert(hassisters + ', that is not correct. Hannah has three sisters. She is the oldest of 4 daughters.')
   }

let haspets = prompt('Does Hannah have any pets?')

  console.log(haspets + ', Hannah has one pet.')
   
  if(haspets.toLowerCase() === 'yes' ||
   haspets.toUpperCase() === 'YES' ||
   haspets.toLowerCase() === 'y' ||
   haspets.toUpperCase() === 'Y')
     alert(haspets + ', that is correct! Hannah has one pet: a resue dog named Coco.')
     else {
      alert(haspets + ', that is not correct. Hannah has one pet: a resue dog named Coco.')
     }

let knowhannah = confirm('Do you feel like you know Hannah better now?')

console.log(knowhannah + ': You know Hannah better now.')

if(knowhannah) {
  alert('Great! I\'m so happy you got to learn a little bit more about me :\)\!')
} else {
  alert('Don\'t worry. You have three and half more weeks to get to know me more. Looking forward to it!') 
}