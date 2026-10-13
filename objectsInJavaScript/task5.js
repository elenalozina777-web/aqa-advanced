    const users = [
        { age: 38, email: "helga@mail.com"},
        { name: "Jack", age: 35, email: "jack@mail.com" },
        { name: "Jane", age: 45},
        { name: "Handy", email: "handy@mail.com" }

    ];
    
    for (const {name, age, email} of users)  {
      const tempName = name ?? "Defolt name";
      const tempAge = age ?? "Defolt age";
      const tempEmail = email ?? "Defolt email";

      console.log (tempName, tempAge,tempEmail);
      
      
    }



       

