export function formatPrice(input) {
    let output = input / 100
    return output.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}