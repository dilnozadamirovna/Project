import React, { useState } from "react";
import "./Part3.css";
import part21 from './page21.png'
const toursData = [
    {
        id: 1,
        title: "Золотое кольцо Абхазии (из Адлера)",
        price: "1 618 ₽",
        people: "1 412",
        duration: "2.5 часа",
        description:
            "Экскурсия по маршруту 'Золотое кольцо Абхазии' от Махачкалы до Минеральных Вод. Прекрасный отдых с посещением горных мест.",
        image: part21,
    },
    {
        id: 2,
        title: "Золотое кольцо Абхазии (из Адлера)",
        price: "1 618 ₽",
        people: "1 412",
        duration: "2.5 часа",
        description:
            "Экскурсия по маршруту 'Золотое кольцо Абхазии' от Махачкалы до Минеральных Вод. Прекрасный отдых с посещением горных мест.",
        image: part21,
    },
    {
        id: 3,
        title: "Золотое кольцо Абхазии (из Адлера)",
        price: "1 618 ₽",
        people: "1 412",
        duration: "2.5 часа",
        description:
            "Экскурсия по маршруту 'Золотое кольцо Абхазии' от Махачкалы до Минеральных Вод. Прекрасный отдых с посещением горных мест.",
        image: part21,
    },
    {
        id: 4,
        title: "Золотое кольцо Абхазии (из Адлера)",
        price: "1 618 ₽",
        people: "1 412",
        duration: "2.5 часа",
        description:
            "Экскурсия по маршруту 'Золотое кольцо Абхазии' от Махачкалы до Минеральных Вод. Прекрасный отдых с посещением горных мест.",
        image: part21,
    },
    {
        id: 5,
        title: "Золотое кольцо Абхазии (из Адлера)",
        price: "1 618 ₽",
        people: "1 412",
        duration: "2.5 часа",
        description:
            "Экскурсия по маршруту 'Золотое кольцо Абхазии' от Махачкалы до Минеральных Вод. Прекрасный отдых с посещением горных мест.",
        image: part21,
    },

];

const Part3 = () => {
    const [filters, setFilters] = useState({
        minPrice: 1000,
        maxPrice: 4000,
        peopleCount: 5,
        location: "Абхазия",
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div className="tours-container">
            {/* Filters Section */}
            <div className="filtersPar">
                <h3>Фильтры</h3>
                <div className="filter-item">
                    <label>Стоимость</label>
                    <div className="price-range">
                        <input
                            type="range"
                            name="minPrice"
                            min="500"
                            max="5000"
                            value={filters.minPrice}
                            onChange={handleFilterChange}
                        />
                        <input
                            type="range"
                            name="maxPrice"
                            min="500"
                            max="5000"
                            value={filters.maxPrice}
                            onChange={handleFilterChange}
                        />
                        <p>
                            {filters.minPrice} ₽ - {filters.maxPrice} ₽
                        </p>
                    </div>
                </div>
                <div className="filter-item">
                    <label>Количество человек</label>
                    <div className="people-options">
                        <button className="active">  1 </button>
                        <button className="active">2</button>
                        <button className="active">5</button>
                        <button className="active"> 10+</button>
                        <button className="active"> 50+</button>
                    </div>
                </div>
                <div className="filter-item">
                    <label>Место</label>
                    <select name="location" onChange={handleFilterChange}>
                        <option value="Абхазия">Абхазия</option>
                        <option value="Адлер">Адлер</option>
                        <option value="Сочи">Сочи</option>
                    </select>
                </div>
                <button className="apply-filters">Показать</button>
                <button className="reset-filters">Сбросить фильтры</button>
            </div>

            {/* Tours Section */}
            <div className="tours-list">
                <h2>Наши туры</h2>
                {toursData.map((tour) => (
                    <div className="tour-card" key={tour.id}>
                        <img src={tour.image} alt={tour.title} />
                        <div className="tour-details">
                            <h3>{tour.title}</h3>
                            <p>{tour.description}</p>
                            <div className="tour-info">
                                <span>{tour.price}</span>
                                <span>{tour.people} человек</span>
                                <span>{tour.duration}</span>
                            </div>
                            <button className="tour-button">Подробнее</button>
                        </div>
                    </div>
                ))}
                <div className="pagination">
                    <button>{"<"}</button>
                    <button className="active">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>{">"}</button>
                </div>
            </div>
        </div>
    );
};

export default Part3;
