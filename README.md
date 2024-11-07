### **Web App Implementation of the Typical Math Problem...**
**Objective:** Calculate the monthly electrical cost and consumption of a household appliance.
### **Input Variables:**
1. **Power Rating (P)**:
    - Measured in watts (W) or kilowatts (kW).
2. **Input Voltage (V)**:
    - Voltage at which the appliance operates, typically in volts (V).
3. **Frequency (f)**:
    - Operating frequency of the appliance, typically in hertz (Hz).
4. **Manufacturer's Efficiency Rating (η)**:
    - Efficiency of the appliance, typically in percentage (%).
5. **Operating Time (t)**:
    - The number of hours the appliance is used per day.
6. **Number of Days in a Month (d)**:
    - The number of days the appliance is used in a month, typically 30 or 31.
7. **Electricity Rate (R)**:
    - Cost of electricity per kilowatt-hour (kWh), typically in ₱/kWh.

### **Outputs:**
1. **Daily Energy Consumption (E$_{daily}$)**:
    - Measured in kilowatt-hours (kWh).
    - Formula: E$_{daily}$ = $\frac{P ⨯ t}{1,000}$
2. **Monthly Energy Consumption (E$_{monthly}$)**:
    - Measured in kilowatt-hours (kWh).
    - Formula: E$_{monthly}$ = E$_{daily}$ ⨯ d
3. **Monthly Cost (C$_{monthly}$)**:
    - Measured in ₱ (PHP).
    - Formula: C$_{monthly}$ = E$_{monthly}$ ⨯ R

### **Example Calculation:**
Let's assume an appliance with the following characteristics:
- **Power Rating (P)**: 500W (or 0.5kW)
- **Operating Time (t)**: 4 hours per day
- **Number of Days in a Month (d)**: 30 days
- **Electricity Rate (R)**:₱17.8966 per kWh
1. **Daily Energy Consumption**:
    - E$_{daily}$ = $\frac{500 W ⨯ 4 hours}{1,000}$ = 2 $\text{kWh}$
2. **Monthly Energy Consumption**:
    - E$_{monthly}$ = 2 $\text{kWh/day}$ ⨯ 30 $\text{days}$ = 60 $\text{kWh}$
3. **Monthly Cost**:
    - C$_{monthly}$= 60 $\text{kWh}$ ⨯ 17.8966 $\text{₱/kWh}$ = ₱1,073.80
