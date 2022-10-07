function how_many_books() {
        let number = prompt("How many books have you read this year? (Use numbers, please!)");
        let message;

        if (number <= 2) {
                message = "Seriously? You gotta stop binge-watching!!!";
        } else if (number <= 10) {
                message = "Not bad!";
        } else if (number <= 20) {
                message = "Wow! I thought I read a lot!!!";
        } else {
                message = "That amount can't be true!";
        }
        return message;
};

how_many_books();

function favorite_genre() {
        let genre = prompt("Is your favorite genre mystery, science fiction, or horror?");
        let message;

        if (genre.toLowerCase() == "mystery") {
                document.write("What a mysterious answer!");
        } else if (author.toLowerCase() == "science fiction") {
                document.write("Nerd alert!");
        } else if (author.toLowerCase() == "horror") {
                document.write("That's scary!");
        }
        return message;
};

favorite_author();

function favorite_author() {
        let author = prompt("Is your favorite author Ayn Rand, Michael Crichton, or Walter Tevis?");
        let message;

        if (author.toLowerCase() == "ayn rand") {
                document.write("Who is John Galt?");
        } else if (author.toLowerCase() == "michael crichton") {
                document.write("Because . . . everything looks different . . . on the other side.");
        } else if (author.toLowerCase() == "walter tevis") {
                document.write("Would you like to play chess?");
        } else {
                message = "That was't a choice! Try again!";
        }
        return message;
};

favorite_author();

/* https://pgmorales76.github.io/website_for_code_102/scripts/app_1.js */