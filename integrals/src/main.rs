use std::f64::consts::PI;

fn integrate(f: fn(f64) -> f64, a: f64, b: f64, n: i64) -> f64 {
    let dx: f64 = (b - a) / n as f64;

    let mut area = 0f64;

    for i in 1..=n {
        area += dx * f(a + i as f64 * dx);
    }
    area
}

fn main() {
    let area_approx = integrate(|x| x.cos(), 0f64, 10f64, 1_000_000);
    println!("Area: {area_approx:.3}");
}
