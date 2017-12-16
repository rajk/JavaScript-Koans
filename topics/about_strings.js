
module("About Strings (topics/about_strings.js)");

test("delimiters", function() {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    equal(__, singleQuotedString === doubleQuotedString, 'are the two strings equal?');
});

test("concatenation", function() {
    var fruit = "apple";
    var dish = "pie";
    equal(__, fruit + " " + dish, 'what is the value of fruit + " " + dish?');
});

test("character Type", function() {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    equal(__, characterType, 'Javascript has no character type');
});

test("escape character", function() {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    equal(__, stringWithAnEscapedCharacter, 'what  is the value of stringWithAnEscapedCharacter?');
});

test("string.length", function() {
    var fruit = "apple";
    equal(__, fruit.length, 'what is the value of fruit.length?');
});

test("slice", function() {
    var fruit = "apple pie";
    equal(__, fruit.slice(0,5), 'what is the value of fruit.slice(0,5)?');
});

test("indexOf", function() {
    var fruit = "apple pie";
    equal(__, fruit.indexOf('a'), 'what is the index of character a in the string?');
    equal(__, fruit.indexOf('a', 3), 'what is the index of character a in the string starting at offset 3?');
    equal(__, fruit.indexOf('p'), 'what is the index of character p in the string?');
    equal(__, fruit.indexOf('p', 5), 'what is the index of character p in the string starting at offset 5?');
    equal(__, fruit.indexOf('z'), 'what is the index of character z in the string?');
});

test("lastIndexOf", function() {
    var fruit = "apple pie";
    equal(__, fruit.lastIndexOf('a'), 'what is the last index of character a in the string?');
    equal(__, fruit.lastIndexOf('a', 3), 'what is the last index of character a in the string starting at offset 3?');
    equal(__, fruit.lastIndexOf('p'), 'what is the last index of character p in the string?');
    equal(__, fruit.lastIndexOf('z'), 'what is the index of character z in the string?');
});

test("trim", function() {
    var fruit = "   apple pie  ";
    equal(__, fruit.trim(fruit), 'what is the trimmed string?');
    equal(__, fruit.trim("pie     "), 'what is the trimmed string?');
    equal(__, fruit.trim("   apple"), 'what is the trimmed string?');
});

test("trimLeft", function() {
    var fruit = "   apple pie  ";
    equal(__, fruit.trimLeft(fruit), 'what is the trimmed string?');
    equal(__, fruit.trimLeft("pie     "), 'what is the trimmed string?');
    equal(__, fruit.trimLeft("   apple"), 'what is the trimmed string?');
});

test("startsWith", function() {
    var fruit = "apple pie";
    equal(__, fruit.startsWith("app"), 'does the string start with?");
    equal(__, fruit.startsWith("ap"), 'does the string start with?");
    equal(__, fruit.startsWith("pie"), 'does the string start with?");
    equal(__, fruit.startsWith("pie", 5), 'does the string start with?");
});

test("endsWith", function() {
    var fruit = "apple pie";
    equal(__, fruit.endsWith("pie"), 'does the string end with?");
    equal(__, fruit.endsWith("app"), 'does the string end with?");
    equal(__, fruit.endsWith("ie"), 'does the string end with?");
    equal(__, fruit.endsWith("le", 5), 'does the string end with?");
});

test("substring", function() {
    var fruit = "apple pie";
    equal(__, fruit.substring(0, 5), 'what is the substring?');
    equal(__, fruit.endsWith(5), 'what is the substring?');
    equal(__, fruit.endsWith(5, 0), 'what is the substring?');
    equal(__, fruit.endsWith(7), 'what is the substring?');
});
