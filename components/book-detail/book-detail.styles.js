import { css } from 'lit-element';

export default css`

    :host {
        display: block;
        width: 336px; 
    }

    .card-wrapper {
        background-color: #FFF;
        box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
        display: grid;
        grid-template-columns: 1fr;
        margin: 16px auto;
        position: relative;
        width: 100%;
    }

    .card-wrapper .backpage {
        font-size: 20px;
        height: 22px;
        left: 0;
        margin: auto;
        position: absolute;
        right: 0;
        top: 640px;
        width: 91px;
    }

    .card-wrapper .backpage::before {
    content: url("./img/back-arrow-20.png");
        height: 20px;
        margin-right: 10px;
        width: 20px;
    }

    .card-img {
        padding: 40px 58px 16px 58px;
        position: relative;
    }

    .card-img::after {
        content: "";
        background-image: url("./img/badge.png");
        background-size: cover;
        display: block;
        height: calc(119px - 0.3*119px);
        position: absolute;
        right: 36px;
        top: 20px;
        transform: rotate(3deg);
        width: calc(95px - 0.3*95px);
    }

    .book-cover {
        width: 100%;
    }

    .card-header {
        margin-bottom: 18px;
    }

    .card-header::after {
        background-color: #BED23C;
        content: "";
        display: block;
        height: 4px;
        margin-top: 10px;
        width: 100%;
    }

    .book-title {
        color: #000;
        font-size: 24px;
        font-weight: 700;
        line-height: 38px;
    }

    .genre {
        color: #828282;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
    }

    .card-body {
        padding: 0 16px 20px 16px;
        width: 100%;
    }

    .card-content {
        margin-bottom: 25px;
    }

    .subtitle {
        color: #000;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
    }

    .card-text {
        color: #828282;
        font-size: 14px;
        line-height: 24px;
    }

    @media (min-width: 1024px) {
        :host {
            width: 900px; 
        }

        .card-wrapper {
            grid-template-columns: 1fr 2fr;
            height: 416px;
            position: relative;
            width: 100%;
        }

        .card-wrapper .backpage {
            bottom: 510px;
            margin: 0;
            top: initial;
        }

        .card-img {
            padding: 22px;
        }

        .card-img::after {
            height: 119px;
            left: 220px;
            top: 0;
            width: 95px;
        }
        .book-cover {
            height: 368px;
            width: 261px;
        }

        .card-header {
            margin-bottom: 35px;
        }

        .book-title {
            color: #000;
            font-size: 32px;
            font-weight: 700;
            height: 39px;
            line-height: 38px;
            max-width: 221x;
        }
        .genre {
            color: #828282;
            font-size: 24px;
            font-weight: 700;
            height: 30px;
            line-height: 28px;
            max-width: 98px;
        }

        .card-body {
            align-self: center;
            height: 368px;
            width: 100%;
        }

        .card-content {
            margin-bottom: 30px;
        }

        .subtitle {
            color: #000;
            font-size: 20px;
            font-weight: 700;
            height: 22px;
            line-height: 24px;
        }

        .card-text {
            color: #828282;
            font-size: 20px;
            height: 22px;
            line-height: 24px;
            max-width: 274px;
        }
        
    } 
`;
