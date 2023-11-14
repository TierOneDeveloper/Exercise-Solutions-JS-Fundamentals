function requiredReading(pages, readedPagesPerHour, daysPerBook) {
    let totalHours = pages / readedPagesPerHour;
    let readHoursPerDay = totalHours / daysPerBook;
    console.log((readHoursPerDay));
}

requiredReading(212, 20, 2)
