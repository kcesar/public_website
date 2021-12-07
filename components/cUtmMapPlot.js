class cUtmMapPlot extends HTMLElement {
    imagePath = './assets/img/map_01.jpg';
    imageOriginalWidth = 1540;
    imageRenderSize = 800;
    imageScale = this.imageRenderSize/this.imageOriginalWidth;
    containerHeight = 300;
    containerWidth = 300;

    origin = {x:135, y:-1413};
    orgiinUTM = {easting: 619000, northing: 5253000};
    sePoint = {x: 1299, y: -1435};
    nePoint = {x: 1323, y: -267};

    eastingScale = this._linearDistance(this.origin.x,this.origin.y,this.sePoint.x,this.sePoint.y)/1000;
    northingScale = this._linearDistance(this.sePoint.x,this.sePoint.y,this.nePoint.x,this.nePoint.y)/1000;
    eastingSlope = this._calculateSlope(this.origin.x,this.origin.y,this.sePoint.x,this.sePoint.y);
    northingSlope = this._calculateSlope(this.sePoint.x,this.sePoint.y,this.nePoint.x,this.nePoint.y);

    easting_intercept = this.origin.y - (this.eastingSlope * this.origin.x);
    northing_intercept = this.origin.y - (this.northingSlope * this.origin.x);

    constructor() {
        super();

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                }

                .map_container {
                    width: ${this.containerWidth}px;
                    height: ${this.containerHeight}px;
                    background-image: url('${this.imagePath}');
                    background-size: ${this.imageRenderSize}px;
                    background-repeat: no-repeat;
                    border: 2px solid black;
                    position: relative;
                }
        
                .map_point {
                    width: 16px;
                    height: 16px;
                    border: 2px solid red;
                    border-radius: 50%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -8px;
                    margin-top: -8px;
                }
                
                .map_circle {
                    width: 4px;
                    height: 4px;
                    background-color: red;
                    border-radius: 50%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -2px;
                    margin-top: -2px;
                }
            </style>
            <div id="wrapper">
                <div class="map_container">
                    <div class="map_point"></div>
                    <div class="map_circle"></div>
                </div>
            </div>
        `;

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.MAP = this.shadowRoot.querySelector('.map_container');
        this._draw();
    }

    static get observedAttributes() { return ['style']; }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'style':
                this.shadowRoot.querySelector('#wrapper').style = newValue;
                break;
            case 'easting':
                this._draw();
                break;
            case 'northing':
                this._draw();
                break;
        }
    }

    get style() {
        return this.getAttribute('style');
    }

    set style(newValue) {
        this.setAttribute('style', newValue);
    }

    get easting() {
        return this.getAttribute('easting');
    }

    set easting(newValue) {
        this.setAttribute('easting', newValue);
    }

    get northing() {
        return this.getAttribute('northing');
    }

    set northing(newValue) {
        this.setAttribute('northing', newValue);
    }

    getMapContainerPlot() {
        this._easting = (this.easting - this.orgiinUTM.easting) * this.eastingScale;
		this._northing = (this.northing - this.orgiinUTM.northing) * this.northingScale;

        let eastingPlot = {
            x: this.origin.x + (this._easting * Math.sqrt(1/(1+Math.pow(this.eastingSlope,2)))),
            y: this.origin.y + (this.eastingSlope * this._easting * Math.sqrt(1/(1+Math.pow(this.eastingSlope,2))))
        }

        let northingPlot = {
            x: eastingPlot.x + (this._northing * Math.sqrt(1/(1+Math.pow(this.northingSlope,2)))),
            y: eastingPlot.y + (this.northingSlope * this._northing * Math.sqrt(1/(1+Math.pow(this.northingSlope,2))))
        }

        return {
            x: -(northingPlot.x * this.imageScale - (this.containerWidth/2)),
            y: (northingPlot.y * this.imageScale + (this.containerHeight/2))
        }
    }

    _draw(){
        let offsets = this.getMapContainerPlot();
        this.shadowRoot.querySelector('.map_container').style.backgroundPosition=`${offsets.x}px ${offsets.y}px`;
    }

    _calculateSlope(x1, y1, x2, y2) {
        return (y1 - y2) / (x1 - x2);
    }

    _linearDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    }

}

customElements.define('c-utm-map-plot', cUtmMapPlot);