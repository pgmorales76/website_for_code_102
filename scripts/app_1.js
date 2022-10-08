function how_many_books() {
        let number = prompt("How many books have you read this year? (Use numbers, please!)");
        let message;

        if (x == "") {
                alert("That's not a vaild number, silly! C'mon, tell me!");
                return false;
        }
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

function favorite_genre() {
        let genre = prompt("Is your favorite genre mystery, science fiction, or horror?");
        let message;

        if (x == "") {
                alert("That's not a genre, silly! C'mon, tell me!");
                return false;
        }
        if (genre.toLowerCase() == "mystery") {
                document.write("What a mysterious answer!");
        } else if (author.toLowerCase() == "science fiction") {
                document.write("Nerd alert!");
        } else if (author.toLowerCase() == "horror") {
                document.write("That's scary!");
        }
        return message;
};

function favorite_author() {
        let author = prompt("Is your favorite author Ayn Rand, Michael Crichton, or Walter Tevis?");
        let message;

        if (x == "") {
                alert("Who is that? C'mon, tell me!");
                return false;
        }
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
