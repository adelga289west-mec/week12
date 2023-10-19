export default function Footer()
{
    return(
        <>
        
        <footer className="footer">
  <div className='link-box'>
    <div className="footer-links" id='contact'>
      <a href="#" className="footer-link">Contact:</a>
        <div className="social-icons">
            <a href="#"><img src="instagram_icon.png" alt="Instagram Logo" /></a>
            <a href="#"><img src="facebook_logo.png" alt="Facebook Logo" /></a>
            <a href="#"><img src="twitter_icon.png" alt="Twitter Logo" /></a>
        </div>
    </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Support</a>
          <a href="#" className="footer-link">Contact</a>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">Creators Handbook</a>
          <a href="#" className="footer-link">Terms of Use</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>
      </div>
  <br/>
  <br/>

    <div className="footer-copyright">
      © World Kitchen Wonders 2023
    </div>
</footer>
        
        </>

    )
}


