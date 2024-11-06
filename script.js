function calculate() {
    const power = document.getElementById('power').value;
    const time = document.getElementById('time').value;
    const days = document.getElementById('days').value;
    const rate = document.getElementById('rate').value;

    const dailyConsumption = (power * time) / 1000;
    const monthlyConsumption = dailyConsumption * days;
    const monthlyCost = monthlyConsumption * rate;

    document.getElementById('dailyConsumption').innerText = `Daily Energy Consumption: ${dailyConsumption.toFixed(2)} kWh`;
    document.getElementById('monthlyConsumption').innerText = `Monthly Energy Consumption: ${monthlyConsumption.toFixed(2)} kWh`;
    document.getElementById('monthlyCost').innerText = `Monthly Cost: ₱ ${monthlyCost.toFixed(2)}`;
}
