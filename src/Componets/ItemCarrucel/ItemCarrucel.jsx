

const ItemCarrucel = () => {
  return (
    <div class="carrousel">
    <div class="conteCarrousel">
        <div class="itemCarrousel" id="itemCarrousel-1">
            <div class="itemCarrouselTarjeta">A</div>
            <div class="itemCarrouselArrows">
                <a href="#itemCarrousel-3">
                    <i class="fas fa-chevron-left"></i>
                </a>
                <a href="#itemCarrousel-2">
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
        <div class="itemCarrousel" id="itemCarrousel-2">
            <div class="itemCarrouselTarjeta">B</div>
            <div class="itemCarrouselArrows">
                <a href="#itemCarrousel-1">
                    <i class="fas fa-chevron-left"></i>
                </a>
                <a href="#itemCarrousel-3">
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
        <div class="itemCarrousel" id="itemCarrousel-3">
            <div class="itemCarrouselTarjeta">C</div>
            <div class="itemCarrouselArrows">
                <a href="#itemCarrousel-2">
                    <i class="fas fa-chevron-left"></i>
                </a>
                <a href="#itemCarrousel-1">
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="conteCarrouselController">
        <a href="#itemCarrousel-1">•</a>
        <a href="#itemCarrousel-2">•</a>
        <a href="#itemCarrousel-3">•</a>
    </div>
</div>
    
)}

export default ItemCarrucel