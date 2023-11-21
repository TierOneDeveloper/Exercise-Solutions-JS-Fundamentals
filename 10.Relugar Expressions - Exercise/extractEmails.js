function extractEmails(string) {

  let pattern = /(^| )[A-Za-z0-9]+[\w.\-]*@{1}([A-Za-z-]+(\-)*)(\.[A-Za-z-]+)+/g;

  let match = string.match(pattern);

  for (let each of match) {
    console.log(each);
  }
}

extractEmails('Please contact us at: support@github.com.')

console.log("-------------------------");

extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')

console.log("-------------------------");

extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')