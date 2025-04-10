document.addEventListener("DOMContentLoaded", function () {
    const applianceList = [
        { id: "tv", name: "LED TV", min: 40, max: 150 },
        { id: "desktop", name: "Desktop Computer", min: 150, max: 600 },
        { id: "laptop", name: "Laptop Charger", min: 45, max: 100 },
        { id: "phone", name: "Phone/Tablet Charger", min: 5, max: 25 },
        { id: "ref-inv", name: "2-Door Inverter Refrigerator", min: 100, max: 250 },
        { id: "fridge-vacation", name: "Inverter Fridge (Vacation Mode)", min: 50, max: 100 },
        { id: "ref-noninv", name: "Non-Inverter Refrigerator", min: 150, max: 400 },
        { id: "induction", name: "Induction Stove", min: 800, max: 2200 },
        { id: "ricecooker", name: "Rice Cooker", min: 300, max: 800 },
        { id: "kettle", name: "Electric Kettle", min: 1500, max: 2200 },
        { id: "microwave", name: "Microwave Oven", min: 600, max: 1500 },
        { id: "washer-top", name: "Top Load Washing Machine", min: 200, max: 500 },
        { id: "washer-front", name: "Front Load Washing Machine", min: 400, max: 1200 },
        { id: "ac-inv", name: "Inverter 1HP Aircon", min: 600, max: 1000 },
        { id: "ac-noninv", name: "Non-Inverter 1HP Aircon", min: 900, max: 1200 },
        { id: "fan", name: "Stand Fan", min: 50, max: 100 },
        { id: "ceiling-fan", name: "Ceiling Fan", min: 70, max: 120 },
        { id: "iron", name: "Electric Iron", min: 800, max: 1500 }
    ];

    const applianceDropdown = document.getElementById("appliance");

    // Populate dropdown dynamically
    applianceList.forEach(appliance => {
        const option = document.createElement("option");
        option.value = appliance.id;
        option.textContent = `${appliance.name} (${appliance.min}W - ${appliance.max}W)`;
        applianceDropdown.appendChild(option);
    });

    // Handle appliance selection and populate power input
    applianceDropdown.addEventListener("change", function () {
        const selectedAppliance = applianceList.find(appliance => appliance.id === this.value);
        if (selectedAppliance) {
            document.getElementById("power").dataset.min = selectedAppliance.min;
            document.getElementById("power").dataset.max = selectedAppliance.max;
            document.getElementById("power").value = ''; // Blank by default; user can still enter their own value.
        } else {
            document.getElementById("power").removeAttribute("data-min");
            document.getElementById("power").removeAttribute("data-max");
        }
    });
});

function calculate() {
    const powerInput = document.getElementById("power");
    const time = parseFloat(document.getElementById("time").value);
    const days = parseFloat(document.getElementById("days").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (isNaN(time) || isNaN(days) || isNaN(rate)) {
        alert("Please enter valid numeric values.");
        return;
    }

    const minPower = parseFloat(powerInput.dataset.min);
    const maxPower = parseFloat(powerInput.dataset.max);
    const userPower = parseFloat(powerInput.value);

    let dailyConsumption, monthlyConsumption, monthlyCost;

    if (!isNaN(userPower)) {
        // User entered a custom value; calculate with that
        dailyConsumption = (userPower * time) / 1000;
        monthlyConsumption = dailyConsumption * days;
        monthlyCost = monthlyConsumption * rate;

        document.getElementById("dailyConsumption").innerText = `Daily Energy Consumption: ${dailyConsumption.toFixed(2)} kWh`;
        document.getElementById("monthlyConsumption").innerText = `Monthly Energy Consumption: ${monthlyConsumption.toFixed(2)} kWh`;
        document.getElementById("monthlyCost").innerText = `Monthly Cost: ₱ ${monthlyCost.toFixed(2)}`;
    } else if (!isNaN(minPower) && !isNaN(maxPower)) {
        // Use min/max range for calculations
        const dailyConsumptionMin = (minPower * time) / 1000;
        const dailyConsumptionMax = (maxPower * time) / 1000;

        const monthlyConsumptionMin = dailyConsumptionMin * days;
        const monthlyConsumptionMax = dailyConsumptionMax * days;

        const monthlyCostMin = monthlyConsumptionMin * rate;
        const monthlyCostMax = monthlyConsumptionMax * rate;

        document.getElementById("dailyConsumption").innerText = `Daily Energy Consumption: ${dailyConsumptionMin.toFixed(2)} to ${dailyConsumptionMax.toFixed(2)} kWh`;
        document.getElementById("monthlyConsumption").innerText = `Monthly Energy Consumption: ${monthlyConsumptionMin.toFixed(2)} to ${monthlyConsumptionMax.toFixed(2)} kWh`;
        document.getElementById("monthlyCost").innerText = `Monthly Cost: ₱ ${monthlyCostMin.toFixed(2)} to ₱ ${monthlyCostMax.toFixed(2)}`;
    } else {
        alert("Please select an appliance or manually enter a power rating.");
    }
}
