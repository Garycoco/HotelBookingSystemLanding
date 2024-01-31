import React from 'react'
import './Booking.css';

const Booking = () => {
  return (
    <section id="book-room">
        <div class="book-room-container">
            <h2>Book a Room</h2>
            <p>Discover the perfect space for you!</p>
            <div class="action">
                <div class="action-item">
                    <div class="action-item-wrapper">
                        <h4>Date</h4>
                        <div class="action-item-action">
                            <span class="material-symbols-outlined">
                                calendar_month
                            </span>
                            <p>Check Available</p>
                        </div>
                    </div>

                    <div class="action-item-wrapper">
                        <h4>Person</h4>
                        <div class="action-item-action">
                            <div class="second-action-item">
                                <div class="second-action-item-item">
                                    <span class="material-symbols-outlined">
                                        boy
                                    </span>
                                    <p>Adults</p>

                                    <p>2</p>
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </div>

                                <div class="second-action-item-item">
                                    <span class="material-symbols-outlined">
                                        child_care
                                    </span>
                                    <p>Children</p>
                                    <p>0</p>
                                    <span class="material-symbols-outlined">
                                        expand_more
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action-item-wrapper">
                        <br/>
                        <div class="book-btn">
                            <a href="">BOOK NOW</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Booking