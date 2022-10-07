var name = prompt("Your name:", "");
document.write("Hello ", name);

let favorite_author = prompt("Who is your favorite author?");
// console.log(favorite_author);



if (favorite_author.toLowerCase() == "ayn rand") {
        document.write("Me, too!!!")
} else {
        document.write("Great choice!")
}

if (confirm("Shall I print Hello World?")) {
        document.write("Hello World");
} else {
        document.write("OK, I won't print it.");
}

/* https://pgmorales76.github.io/website_for_code_102/scripts/app_1.js */