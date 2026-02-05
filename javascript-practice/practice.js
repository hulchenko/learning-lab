////Frontend Masters Task #1
//Programming Primer:

function addFavoriteBook(bookName) {
  if(!bookName.includes("Great")){
      favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
console.log(`Favorite Books: ${favoriteBooks.length}`);
for (let bookName of favoriteBooks){
  console.log(bookName);
}
}



var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();

////Frontend Masters Task #2:
//Three Pillars of JS:

class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}

	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}

function loadBooks(bookshelf) {
	fakeAjax(BOOK_API,function onBooks(bookNames){
		for (let bookName of bookNames) {
			bookshelf.addFavoriteBook(bookName);
		}
		bookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks);


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}


////Frontend Masters Task #3
//Phone purchase:

const phonePrice = 99.99;
const accessoryPrice = 9.99;
const phoneTax = 0.08;
const spendingThreshold = 200;
const bankBalance = 2000;

var amount = 0;

function calculateTax(amount){
  return amount * phoneTax;
}

function formatAmount(amount){
  return "$" + amount.toFixed(2);
}

//keep buying till we have money left
while
(amount < bankBalance) {
  amount = amount + phonePrice;
  //can we afford the accessory?
  if(amount < spendingThreshold){
  amount = amount + accessoryPrice;
}
}
amount = amount + calculateTax(amount);

console.log("Your purchase: " + formatAmount(amount));

if (amount > bankBalance) {
  console.log("You can't afford this purchase ");
}