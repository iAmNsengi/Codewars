function takeUmbrella(weather, chance) {
    return (weather === 'rainy') || (weather === 'cloudy' && chance > 0.20) ||
        (weather === 'sunny' && chance > 0.50);

}