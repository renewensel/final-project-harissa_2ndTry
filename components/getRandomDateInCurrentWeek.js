// random date
export function getRandomDateInCurrentWeek() {
    const currentDate = new Date(); // Get the current date

    // Calculate the starting date of the current week (Monday)
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(
        currentDate.getDate() -
            currentDate.getDay() +
            (currentDate.getDay() === 0 ? -6 : 1)
    );

    // Calculate the ending date of the current week (Friday)
    const endOfWeek = new Date(currentDate);
    endOfWeek.setDate(currentDate.getDate() + (5 - currentDate.getDay()));

    // Generate a random date within the current week (Monday to Friday)
    const randomDate = new Date(
        startOfWeek.getTime() +
            Math.random() * (endOfWeek.getTime() - startOfWeek.getTime())
    );

    return {
        startOfWeek,
        endOfWeek,
        randomDate,
    };
}

const { startOfWeek, endOfWeek, randomDate } = getRandomDateInCurrentWeek();
const formattedStartDate = startOfWeek?.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
});
const formattedEndDate = endOfWeek?.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
});

console.log(
    "Random Date within the Current Week (Mon to Fri):",
    randomDate?.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    })
);
console.log("Start of Week:", formattedStartDate);
console.log("End of Week:", formattedEndDate);
const dateRange = `${formattedStartDate} - ${formattedEndDate}`;
console.log(dateRange);
