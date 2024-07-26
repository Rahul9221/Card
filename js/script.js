// const StudantData = document.getElementById("StudantData");
let student = [{
    fristname: "Rahul",
    lastname: "Goswami",
    age: 22,
    gender: "male",
    address: {
        city: "surat",
        address: "Kadodara",
        state: "gujarat",
    },

    contact: "8352695342",
    email: "rgoswami14@gmail.com",
}, {
    fristname: "vasu",
    lastname: "zala",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: "bapu vadi",
        state: "gujarat",
    },

    contact: "9352635126",
    email: "vasu@gmail.com",
}, {
    fristname: "Mayur",
    lastname: " patel",
    age: 22,
    gender: "male",
    address: {
        city: "surat",
        address: "varachha",
        state: "gujarat",
    },
    contact: "9442505567",
    email: "Mayur123@gmail.com",
}, {
    fristname: "Rohan",
    lastname: " kalathiya",
    age: 20,
    gender: "male",
    address: {
        city: "surat",
        address: "bapu nagar",
        state: "gujarat",
    },

    contact: "9146411252",
    email: "jay123@gmail.com",
}, {
    fristname: "jaydip",
    lastname: " parmar",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: "sudama nagar",
        state: "gujarat",
    },

    contact: "914420452",
    email: "jaydip20@gmail.com",
}, {
    fristname: "Ravi",
    lastname: " dabhi",
    age: 16,
    gender: "male",
    address: {
        city: "surat",
        address: "mota varchha ",
        state: "gujarat",
    },
    contact: "9141525263",
    email: "ravi123@gmail.com",
}, {
    fristname: "Divyang",
    lastname: "Baraiya",
    age: 20,
    gender: "male",
    address: {
        city: "surat",
        address: "sudama chowk",
        state: "gujarat",
    },

    contact: "914565241",
    email: "divyang520@gmail.com",
}, {
    fristname: "varina",
    lastname: " Sharma",
    age: 23,
    gender: "male",
    address: {
        city: "surat",
        address: " sita nagar ,",
        state: "gujarat",
    },

    contact: "9152427890",
    email: "varina456@gmail.com",
}, {
    fristname: "Vijay",
    lastname: "Kalsariya",
    age: 17,
    gender: "male",
    address: {
        city: "surat",
        address: " dabholi ,",
        state: "gujarat",
    },

    contact: "9192552386",
    email: "vijay120@gmail.com",
}, {
    fristname: "Rani",
    lastname: " patel",
    age: 20,
    gender: "femal",
    address: {
        city: "surat",
        address: "sudama chowk,",
        state: "gujarat",
    },

    contact: "9114142524",
    email: "rani110@gmail.com",
}, {
    fristname: "mahesh",
    lastname: "dabhi",
    age: 15,
    gender: "male",
    address: {
        city: "surat",
        address: "kamrej",
        state: "gujarat",
    },

    contact: "9135205242",
    email: "mahesh01@gmail.com",
}, {
    fristname: "Vishal",
    lastname: "Parmar",
    age: 18,
    gender: "male",
    address: {
        city: "surat",
        address: "maruti chowk",
        state: "gujarat",
    },

    contact: "9112012467",
    email: " Vishal001@gmail.com",
}, {
    fristname: "Viki",
    lastname: "sonlaki",
    age: 22,
    gender: "male",
    address: {
        city: "surat",
        address: " amroli, surat",
        state: "gujarat",
    },

    contact: "9112351289",
    email: "sonlaki@gmail.com",
}, {
    fristname: "Ajay",
    lastname: "chagani",
    age: 19,
    gender: "male",
    address: {
        city: "surat",
        address: "udhna",
        state: "gujarat",
    },

    contact: "9135626392",
    email: "ajay45@gmail.com",
}, {
    fristname: "sagar",
    lastname: "sanera",
    age: 16,
    gender: "male",
    address: {
        city: "surat",
        address: "sitanaga,",
        state: "gujarat",
    },

    contact: "9121442120",
    email: "sagar78@gmail.com",
}, {
    fristname: "Goutam",
    lastname: " vakani",
    age: 22,
    gender: "male",
    address: {
        city: "surat",
        address: "mota varchha surat",
        state: "gujarat",
    },

    contact: "9155634280",
    email: "rahul@gmail.com",
}, {
    fristname: "het",
    lastname: "chavada",
    age: 19,
    gender: "male",
    address: {
        city: "surat",
        address: " nana varchha surat",
        state: "gujarat",
    },

    contact: "9110120456",
    email: "het@gmail.com",
}, {
    fristname: "manisha",
    lastname: "shiyal",
    age: 20,
    gender: "femal",
    address: {
        city: "surat",
        address: " surat",
        state: "gujarat",
    },

    contact: "9114725253",
    email: "manisha@gmail.com",
}, {
    fristname: "Payal",
    lastname: "mevada",
    age: 17,
    gender: "femal",
    address: {
        city: "surat",
        address: "matavadi",
        state: "gujarat",
    },

    contact: "91252635240",
    email: "Payal2@gmail.com",
}, {
    
    fristname: "Komal",
    lastname: "makvana",
    age: 18,
    gender: "femal",
    address: {
        city: "surat",
        address: "bhagirath-1 surat",
        state: "gujarat",
    },

    contact: "9115415263",
    email: "Komal123@gmail.com",
},] 
student.forEach((object) => {

    StudantData.innerHTML += (`<div class="col-4"><div class="card p-3 mt-3  text-white  bg-dark">
    <div class="d-flex  ">
    <h3>Name : ${object.fristname}
    </h3>
    <h3 class="mx-2">  ${object.lastname}
    </h3>
    </div>
    <h3>age :  ${object.age}
    
    </h3><h3>gender :  ${object.gender}
    </h3><h3>state : ${object.address.state}
    </h3><h3>city : ${object.address.city}
    </h3><h3>Address :  ${object.address.address}
    </h3><h3>contact :  ${object.contact}</h3><h3>
    email :  ${object.email}</h3></div></div>`);
});