
function calculateTax(income: number, taxYear: number): number {
   
    if(taxYear < 2024)
    {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(2000, 2012);