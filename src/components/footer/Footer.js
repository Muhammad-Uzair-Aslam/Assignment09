import React from 'react'
import fbImg from '../../assets/imgs/fb.png'
import twitterImg from '../../assets/imgs/twitter.png'
import linkedImg from '../../assets/imgs/linkedin.png'
import instagramImg from '../../assets/imgs/instagram.png'
export default function Footer() {
    return (
        <div className="container">
        <div className="row mt-5">
          <div className="col-lg-3 col-sm-6 mt-5 p-5">
            <h4>Fruits</h4>
            <p className="div w-25">
              orange Watermelon Garva, Grapes adipisicing Ipsum magnam reprehenderit, nesciunt
              dignissimos?
            </p>
          </div>
          <div className="col-lg-3 col-sm-6 mt-5 p-5">
            <h4>Services</h4>
            <p className="div w-25">
              Randomized wordwhich don't pakistan adipisicing Ipsum magnam reprehenderit, nesciunt
              dignissimos?
            </p>
          </div>
          <div className="col-lg-3 col-sm-6 mt-5 p-5">
            <h4>Lists</h4>
            <p className="div w-25">
              Randomized wordwhich don't pakistan adipisicing Ipsum magnam reprehenderit, nesciunt
              dignissimos?
            </p>
          </div>
          <div className="col-lg-3 col-sm-6 mt-5 p-5">
            <h3>Follow Us</h3>
            <br />
            <img src={fbImg} className="m-1" alt="" />
            <img src={twitterImg} className="m-1" alt="" />
            <img src={linkedImg} className="m-1" alt="" />
            <img src={instagramImg} className="m-1" alt="" />
            <h3 className="mt-3">Subscribe Now</h3>
            <input type="text" className="mt-3" />
            <button className="bton mt-3">Subscribe</button>
          </div>
        </div>
        <h6 className="container footer text-center mt-5">
          Copyright &copy; 2023 All Rights Reserved By Muhammmad Uzair Aslam
        </h6>
      </div>
    )
}
