import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

const Food = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div class="gallery">
        
           
              <div class="gallery-item">
                <img src= "https://img.static-bookatable.com/sketch-gallery-afternoon-tea-oxford-circus-regent-street-london-3.jpg?id=802191c1d0004d3d2fcde8773c7c2608.jpg&404=bat2/404-restaurant.jpg&width=600&height=400&scale=both&mode=crop" alt="sketch London restaurant"/>
                <div class="overlay" data-toggle="modal" data-target="#sketch">
                <div class="text">sketch London</div>
              </div>
                <div class="modal myModal" id="sketch">
                  <span class="close" data-dismiss="modal">&times;</span>
                  <h2>
                    <a href="https://sketch.london/">sketch London</a>
                  </h2>
                  <img src= "https://img.static-bookatable.com/sketch-gallery-afternoon-tea-oxford-circus-regent-street-london-3.jpg?id=802191c1d0004d3d2fcde8773c7c2608.jpg&404=bat2/404-restaurant.jpg&width=600&height=400&scale=both&mode=crop" alt="sketch London restaurant"/>
                  <p>$$$$ Modern European dining</p>
                  <p>Located in the Mayfair section of London, this gorgeous highly Instagrammable restaurant is perfect for lovers of interior design, fine dining, and selfies</p>
                  <br/>
                </div>
              </div>
            
              <div class="gallery-item">
                <img src= "http://cdn.ltstatic.com/2008/October/OY647010_942long.jpg" alt="Govinda's"/>
                  <div class="overlay" data-toggle="modal" data-target="#govinda">
                <div class="text">Dinerama</div>
              </div>
              <div class="modal myModal" id="govinda">
                <span class="close" data-dismiss="modal">&times;</span>
                <h2>
                  <a href="https://www.iskcon-london.org/visit/govindas-restaurant">Govinda's</a>
                </h2>
                <img src= "http://cdn.ltstatic.com/2008/October/OY647010_942long.jpg" alt="Govinda's"/>
                <p>$ Vegetarian restaurant</p>
                <p>Located in the Soho neighborhood, it has been serving thali's (traditional Indian dishes) since 1979</p>
                <br/>
              </div>
              </div>
            
              <div class="gallery-item">
                <img src="https://www.hellomagazine.com/imagenes/cuisine/2017062240030/Outdoor-Afternoon-Tea-London/0-211-572/dolloway-terrace-a.jpg" alt="Chesterfield Hotel"/>
                  <div class="overlay" data-toggle="modal" data-target="#chesterfield">
                <div class="text">Chesterfield Mayfair Hotel</div>
              </div>
              <div class="modal myModal" id="chesterfield">
                <span class="close" data-dismiss="modal">&times;</span>
                <h2>
                  <a href="https://www.chesterfieldmayfair.com/afternoon-tea">Chesterfield Mayfair Hotel</a>
              </h2>
              <img src="https://i.pinimg.com/736x/bf/f6/57/bff657f2c6acfd160e9eedf45d79bdfe.jpg" alt="Chesterfield Hotel"/>
              <p>$$ Afternoon Tea</p>
              <p>What's a trip to London without experiencing a traditional afternoon tea? Marvelous seasonal themed afternoon teas such as "Winter Wonderland" are also available.</p>
              <br/>
              </div>
              </div>
          
       
        
          
            <div class="gallery-item">
              <img src= "http://www.savethedatelondon.com/wp-content/uploads/2016/06/Dinerama-1.jpg" alt="dinerama open market"/>
                <div class="overlay" data-toggle="modal" data-target="#dinerama">
              <div class="text">Dinerama</div>
            </div>
            <div class="modal myModal" id="dinerama">
              <span class="close" data-dismiss="modal">&times;</span>
              <h2>
                <a href="https://www.streetfeast.com/market/dinerama">Dinerama</a>
              </h2>
              <img src= "http://www.savethedatelondon.com/wp-content/uploads/2016/06/Dinerama-1.jpg" alt="dinerama open market"/>
              <p>$$ Food market</p>
              <p>Not sure what to eat? Dinerama's got you covered. With ten bars and nine food traders, Dinerama's options run the gamut from vegan burritos at Club Mexicana to steamed dumplings at Yumplings</p>
              <br/>
            </div>
            </div>
          
            <div class="gallery-item">
              <img src= "https://hg2.com/wp-content/uploads/2015/05/london_Cafes_Claridges-Foyer_1.jpg" alt="claridge's"/>
              <div class="overlay" data-toggle="modal" data-target="#claridges">
              <div class="text">Claridge's Foyer & Reading Room</div>
            </div>
            <div class="modal myModal" id="claridges">
              <span class="close" data-dismiss="modal">&times;</span>
              <h2>
                <a href="https://www.claridges.co.uk/restaurants-bars/the-foyer-and-reading-room/">Claridge's Foyer & Reading Room</a>
              </h2>
              <img src= "https://hg2.com/wp-content/uploads/2015/05/london_Cafes_Claridges-Foyer_1.jpg" alt="claridge's"/>
              <p>$$$$ British dining</p>
              <p>Experience afternoon tea at the Art deco inspired Foyer of Claridges hotel. Also worth checking out is the Reading Room with its intimate banquettes.</p>
              <br/>
            </div>
            </div>
          
           
              <div class="gallery-item">
              <img src= "https://media.timeout.com/images/105146488/630/472/image.jpg" alt="e pellicci"/>
              <div class="overlay" data-toggle="modal" data-target="#pellicci">
                <div class="text">E Pellicci</div>
              </div>
              <div class="modal myModal" id="pellicci">
                <span class="close" data-dismiss="modal">&times;</span>
                <h2>
                  <a href="https://epellicci.has.restaurant/">E Pellicci</a>
                </h2>
                <img src= "https://media-cdn.tripadvisor.com/media/photo-s/0c/8a/13/18/20160727-092141-largejpg.jpg" alt="e pellicci"/>
                <p>$ Italian restaurant</p>
                <p>Another only in London experience: a full English breakfast. E Pellicci, located in the East End, has been serving "caff" grub since 1900, stop by to get a proper English meal.</p>
                <br/>
              </div>
              </div>
            
      
        
          
              <div class="gallery-item">
                <img src= "https://media.timeout.com/images/103375433/630/472/image.jpg" alt="view from Duck & Waffle"/>
                  <div class="overlay" data-toggle="modal" data-target="#duckAndWaffle">
                <div class="text">Duck & Waffle</div>
              </div>
              <div class="modal myModal" id="duckAndWaffle">
                <span class="close" data-dismiss="modal">&times;</span>
                <h2>
                  <a href="https://duckandwaffle.com/">Duck & Waffle</a>
                </h2>
                <img src= "https://media.timeout.com/images/103375433/630/472/image.jpg" alt="view from Duck & Waffle"/>
                <p>$$$ British cuisine</p>
                <p>Enjoy the view at this 24/7 restaurant. Located on the 40th floor of the Heron Tower, the restaurant is named after it's signature meal of duck confit and waffle</p>
                <br/>
              </div>
              </div>
          
              <div class="gallery-item">
                <img src= "https://media.timeout.com/images/102098071/630/472/image.jpg" alt="cahoots"/>
                <div class="overlay" data-toggle="modal" data-target="#cahoots">
                <div class="text">Cahoots</div>
              </div>
              <div class="modal myModal" id="cahoots">
                <span class="close" data-dismiss="modal">&times;</span>
                <h2>
                  <a href="https://cahoots-london.com/">Cahoots</a>
                </h2>
                <img src= "https://media.timeout.com/images/102098071/630/472/image.jpg" alt="cahoots"/>
                <p>$$$ Cocktail bar</p>
                <p>1940's themed cocktail bar, pays homage to London during the Blitz. Perfect for lovers of retro and history buffs. </p>
                <br/>
              </div>
              </div>
            
              <div class="gallery-item">
                <img src= "http://melanmag.com/wp-content/uploads/2017/01/Bad-Egg-Credit-Badegg.london.co_.uk-.jpeg" alt="bad egg brunch restaurant"/>
                  <div class="overlay" data-toggle="modal" data-target="#badEgg">
                <div class="text">Bad Egg</div>
              </div>
              <div class="modal myModal" id="badEgg">
                <span class="close" data-dismiss="modal">&times;</span>
                <h2>
                  <a href="https://www.badegg.london/">Bad Egg</a>
                </h2>
                <img src= "http://melanmag.com/wp-content/uploads/2017/01/Bad-Egg-Credit-Badegg.london.co_.uk-.jpeg" alt="bad egg brunch restaurant"/>
                <p>$ Diner</p>
                <p>Self-billed as London's "ultimate brunch location", indulge in the endless brunch and it's combination Mexican and traditional American fare.</p>
                <br/>
              </div>
              </div>
           
        </div>
   

    );
}

export default Food;