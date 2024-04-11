let firstName:string = "ngo minh";
let lastName:string = "duc";
let fullName:string;

if(firstName.length > 0){
    firstName = firstName.charAt(0).toLocaleUpperCase() + firstName.slice(1);
}

if(lastName.length > 0){
    lastName = lastName.charAt(0).toLocaleUpperCase() + lastName.slice(1);
}

fullName = `${firstName} ${lastName}`;
console.log(fullName);
