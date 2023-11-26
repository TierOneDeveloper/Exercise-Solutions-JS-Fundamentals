function fancyBarcodes(input) {

  let pattern = /@(#+)[A-Z][A-Za-z0-9]{4,}[A-Z]@(#+)/g;
  let digitPattern = /[0-9]/g;
  let barcodesNumber = Number(input.shift());


  for (let i = 0; i < barcodesNumber; i++) {
    let currentBarcode = input.shift();
    let match = currentBarcode.match(pattern);
    if (match) {

      let digits = match[0].match(digitPattern);
      if (digits === null) {
        console.log("Product group: 00");
      } else {
        let productGroup = digits.join("");
        console.log(`Product group: ${productGroup}`);
      }
    } else {
      console.log("Invalid barcode");
    }
  }
}

fancyBarcodes([
  "3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"])

// fancyBarcodes([
//   "6",
//   "@###Val1d1teM@###",
//   "@#ValidIteM@#",
//   "##InvaliDiteM##",
//   "@InvalidIteM@",
//   "@#Invalid_IteM@#",
//   "@#ValiditeM@#"])

