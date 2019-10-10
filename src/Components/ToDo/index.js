import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

const ToDo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className='gallery'>
            <div class="gallery-item">
            <img src="https://freetoursbyfoot.com/wp-content/uploads/2014/08/kew_gardens_2006.jpg" alt="Kew Gardens"/>
            <div class="overlay" onClick={handleShow}>
              <div class="text">Kew Gardens</div>
            </div>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Kew Gardens</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="https://freetoursbyfoot.com/wp-content/uploads/2014/08/kew_gardens_2006.jpg" alt="Kew Gardens"/>              
            <p>Adult tickets: £17.00<br/>
            Child Tickets: £5.00</p>
            <p>All Ages</p>
            <p>The Royal Botanic Gardens at Kew is a fantastic place to explore or to relax. There are also kid-friendly activities provided by the gardens.</p>
        </Modal.Body>
      </Modal>
            </div>
            <div class="gallery-item">
            <img src="https://lonelyplanetimages.imgix.net/a/g/hi/t/0f9fe9bff9036a683b426dbab7cd14bb-camden-market.jpg" alt="Camden Street Market"/>
            <div class="overlay" data-toggle="modal" data-target="#camden">
              <div class="text">Camden Street Market</div>
            </div>
            <div class="modal myModal" id="camden">
              <span class="close" data-dismiss="modal">&times;</span>
              <h2>
                <a href="https://www.camdenmarket.com/">Camden Market</a>
              </h2>
              <img src="https://lonelyplanetimages.imgix.net/a/g/hi/t/0f9fe9bff9036a683b426dbab7cd14bb-camden-market.jpg" alt="Camden Street Market"/>
              <p>Prices vary</p>
              <p>All Ages</p>
              <p>If you are in the mood for intense shopping, Camden Market is for you. It is home to 1,000 unique stalls and shops, you are guaranteed to purchase something that you will love. </p>
              <br/>
            </div>
            </div>
            <div class="gallery-item">
            <img src="https://media.timeout.com/images/100756189/750/422/image.jpg" alt="God's Own Junkyard"/>
            <div class="overlay" data-toggle="modal" data-target="#godsownjunkyard">
              <div class="text">God's Own Junkyard</div>
            </div>
            <div class="modal myModal" id="godsownjunkyard">
              <span class="close" data-dismiss="modal">&times;</span>
              <h2>
                <a href="http://www.godsownjunkyard.co.uk/">God's Own Junkyard</a>
              </h2>
              <img src="https://media.timeout.com/images/100756189/750/422/image.jpg" alt="God's Own Junkyard"/>
              <p>Free</p>
              <p>Ages 13+</p>
              <p>Filled to the brim with handmade neon signs, this art gallery provides a mesmerizing collection of dazzling art fixtures. There is also a cafe available in the gallery to catch a quick bite</p>
             <br/>
            </div>
            </div>
          
          {/* the beginning of a row */}
     
     
        
            <div class="gallery-item">
            <img src="https://media.timeout.com/images/105444299/750/422/image.jpg" class="Design Museum"/>
            <div class="overlay" data-toggle="modal" data-target="#designMuseum">
              <div class="text">Design Museum</div>
            </div>
            <div class="modal myModal" id="designMuseum">
              <span class="close" data-dismiss="modal">&times;</span>
              <h2>
                <a href="https://designmuseum.org/">Design Museum</a>
              </h2>
              <img src="https://media.timeout.com/images/105444299/750/422/image.jpg" class="Design Museum"/>
              <p>Free for permanent exhibit, Prices may vary for temporary exhibits</p>
              <p>All Ages</p>
              <p>This museum located in Kensington, dedicated to "product, industrial, graphic, fashion and architectural design" is an ideal place for those who have a passion for the aesthetic side of things. Don't forget to stop by the universally lauded exhibit "Stanley Kubrick: The Exhibit"</p>
              <br/>
            </div>
            </div>
          
          
            <div class="gallery-item">
            <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2015/01/12/13/15SKYGARDEN1201A.jpg?w968" alt="Sky Garden"/>
            <div class="overlay" data-toggle="modal" data-target="#skyGarden">
              <div class="text">Sky Garden</div>
            </div>
            <div class="modal myModal" id="skyGarden">
              <span class="close" data-dismiss="modal">&times;</span>
              <h2>
                <a href="https://skygarden.london/">Sky Garden</a>
              </h2>
              <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2015/01/12/13/15SKYGARDEN1201A.jpg?w968" alt="Sky Garden"/>
              <p>Free</p>
              <p>All Ages</p>
              <p>Sky Garden is located on the 43rd floor of the Walkie Talkie building. Take in breathtaking views of London from this floor-to-ceiling glass spot.</p>
              <br/>
            </div>
            </div>
         
          
            <div class="gallery-item">
            <img src="https://media.timeout.com/images/100770475/750/422/image.jpg" alt="Columbia Road Flower Market"/>
            <div class="overlay" data-toggle="modal" data-target="#columbiaRoad">
              <div class="text">Columbia Road Flower Market</div>
            </div>
            <div class="modal myModal" id="columbiaRoad">
              <span class="close" data-dismiss="modal">&times;</span>
              <h2>
                <a href="http://www.columbiaroad.info/">Columbia Road Flower Market</a>
              </h2>
              <img src="https://media.timeout.com/images/100770475/750/422/image.jpg" alt="Columbia Road Flower Market"/>
              <p>Prices vary</p>
              <p>All Ages</p>
              <p>If you are in the mood for intense shopping, Camden Market is for you. It is home to 1,000 unique stalls and shops, you are guaranteed to purchase something that you will love. </p>
              <br/>
            </div>
            </div>
        
      
           
     
        <div class="gallery-item">
        <img src="https://i1.wp.com/www.montcalmroyallondoncity.co.uk/blog/wp-content/uploads/2017/12/shutterstock_148036520.jpg?fit=1000%2C664&ssl=1" alt="Barbican Centre"/>
        <div class="overlay" data-toggle="modal" data-target="#barbican">
          <div class="text">Barbican Centre</div>
        </div>
        <div class="modal myModal" id="barbican">
          <span class="close" data-dismiss="modal">&times;</span>
          <h2>
            <a href="https://www.barbican.org.uk/">Barbican Centre</a>
          </h2>
          <img src="https://i1.wp.com/www.montcalmroyallondoncity.co.uk/blog/wp-content/uploads/2017/12/shutterstock_148036520.jpg?fit=1000%2C664&ssl=1" alt="Barbican Centre"/>
          <p>Prices vary</p>
          <p>All Ages</p>
          <p>The Barbican Centre is not just home to a world class cinema, but also to a conservatory, concerts through the London Symphony Orchestra, a public library, and three restaurants. It is a haven for arts lover of all ages.</p>
          <br/>
        </div>
        </div>
      

        <div class="gallery-item">
        <img src="https://media.timeout.com/images/101633893/630/472/image.jpg" alt="Science Museum"/>
        <div class="overlay" data-toggle="modal" data-target="#scienceMuseum">
          <div class="text">Science Museum</div>
        </div>
        <div class="modal myModal" id="scienceMuseum">
          <span class="close" data-dismiss="modal">&times;</span>
          <h2>
            <a href="https://www.sciencemuseum.org.uk/">Science Museum</a>
          </h2>
          <img src="https://media.timeout.com/images/101633893/630/472/image.jpg" alt="Science Museum"/>
          <p>Free (Donations Encouraged)</p>
          <p>All Ages</p>
          <p>The Science Museum is a seven story behemoth dedicated to the exploration of science, medicine, and technology. It is also home to an IMAX cinema showing the latest in scientific films.</p>
          <br/>
        </div>
        </div>
      
        <div class="gallery-item">
        <img src="https://files.list.co.uk/images/p/princecharlescinema-3feb14-lst131195.jpg" alt="Prince Charles Cinema"/>
        <div class="overlay" data-toggle="modal" data-target="#PCC">
          <div class="text">Prince Charles Cinema</div>
        </div>
        <div class="modal myModal" id="PCC">
          <span class="close" data-dismiss="modal">&times;</span>
          <h2>
            <a href="https://princecharlescinema.com/PrinceCharlesCinema.dll/Home">Prince Charles Cinema</a>
          </h2>
          <img src="https://files.list.co.uk/images/p/princecharlescinema-3feb14-lst131195.jpg" alt="Prince Charles Cinema" />
          <p>Non-member tickets £9.00-£10.00<br/>
            Member tickets £5.00</p>
          <p>Ages 13+</p>
          <p>The motto at this eclectic movie theatre is "if they can screen it they will", PCC shows cult movies such as Rocky Horror Picture Show alongside newer releases. They are known for their sing-alongs, movie marathons, and movie all-nighters. This is the perfect spot for film buffs </p>
          <br/>
        </div>
        </div>
     
 
    
    </div>
    );
}

export default ToDo;