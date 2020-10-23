import React from 'react';
import './facilidades.css';
import { Container } from '@material-ui/core';


import Logo from '../../../assets/img/c2a-logo.png'
function Navbar() {
  return (
    <div className="facil-main">
      <Container maxWidth="md" className="nav-display">
        <h1>
          FACILIDADES QUE A C2A TE OFERECE
     </h1>
        <ul className="facil-list">
          <li>
            <svg className="facil-svg" width="291" height="244" viewBox="0 0 291 244" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M247.946 83.634C251.06 89.6802 253.514 95.9162 260.381 95.9162C263.679 95.9162 266.842 94.6222 269.173 92.3188C271.505 90.0155 272.815 86.8914 272.815 83.634C272.815 80.3765 271.505 77.2525 269.173 74.9491C266.842 72.6457 263.679 71.3517 260.381 71.3517C253.402 71.2654 242.152 72.3802 247.946 83.634Z" fill="#2F2E41" />
              <path d="M257.72 231.344L252.406 232.514L245.309 212.825L253.152 211.098L257.72 231.344Z" fill="#A0616A" />
              <path d="M260.223 236.134L243.089 239.906L243.04 239.692C242.845 238.827 242.824 237.932 242.979 237.059C243.134 236.186 243.461 235.352 243.943 234.604C244.424 233.856 245.05 233.208 245.784 232.699C246.518 232.19 247.347 231.829 248.223 231.636L248.224 231.636L258.689 229.332L260.223 236.134Z" fill="#2F2E41" />
              <path d="M273.507 238.382H268.062L265.472 217.639L273.507 217.639L273.507 238.382Z" fill="#A0616A" />
              <path d="M274.895 243.595L257.34 243.594V243.375C257.34 242.489 257.516 241.611 257.86 240.792C258.203 239.973 258.706 239.229 259.341 238.602C259.975 237.976 260.729 237.479 261.558 237.139C262.387 236.8 263.275 236.626 264.173 236.626H264.173L274.895 236.626L274.895 243.595Z" fill="#2F2E41" />
              <path d="M273.543 227.512H266.594C266.111 227.51 265.645 227.337 265.282 227.023C264.918 226.71 264.681 226.277 264.614 225.805L258.315 177.678C258.294 177.527 258.221 177.389 258.108 177.285C257.996 177.182 257.85 177.12 257.697 177.111C257.543 177.101 257.391 177.144 257.266 177.233C257.142 177.321 257.052 177.45 257.012 177.597L253.279 191.339L256.644 222.638C256.701 223.12 256.576 223.606 256.292 224.003C256.009 224.4 255.587 224.68 255.108 224.789L249.596 226.045C249.106 226.154 248.593 226.079 248.157 225.832C247.721 225.586 247.394 225.188 247.241 224.715L238.364 194.288C237.649 192.058 237.403 189.707 237.642 187.38L240.419 159.95L240.63 159.96L277.708 161.725L275.54 225.607C275.524 226.119 275.306 226.604 274.933 226.96C274.56 227.316 274.061 227.514 273.543 227.512Z" fill="#2F2E41" />
              <path d="M259.769 96.1554C265.793 96.1554 270.676 91.3318 270.676 85.3816C270.676 79.4315 265.793 74.6079 259.769 74.6079C253.745 74.6079 248.862 79.4315 248.862 85.3816C248.862 91.3318 253.745 96.1554 259.769 96.1554Z" fill="#A0616A" />
              <path d="M276.877 164.679C276.842 164.679 276.806 164.678 276.769 164.676L239.801 162.713C239.495 162.697 239.198 162.612 238.931 162.464C238.664 162.316 238.435 162.11 238.261 161.861C238.088 161.612 237.975 161.328 237.93 161.029C237.886 160.73 237.912 160.425 238.006 160.137L240.932 151.163C244.064 141.541 244.599 131.278 242.484 121.389C241.93 118.801 241.942 116.127 242.518 113.544C243.094 110.961 244.222 108.529 245.826 106.411C247.404 104.323 249.415 102.591 251.725 101.332C254.034 100.072 256.59 99.3148 259.22 99.1094H259.22C259.401 99.0952 259.583 99.0827 259.765 99.0717C262.548 98.9092 265.332 99.3623 267.914 100.398C270.497 101.433 272.813 103.025 274.694 105.058C276.574 107.09 277.972 109.511 278.785 112.145C279.597 114.778 279.805 117.558 279.391 120.281L276.814 137.376L278.869 162.547C278.891 162.818 278.856 163.092 278.766 163.349C278.676 163.607 278.533 163.843 278.346 164.044C278.159 164.244 277.932 164.404 277.679 164.513C277.426 164.623 277.153 164.679 276.877 164.679Z" fill="#44E379" />
              <path d="M231.386 166.951C231.927 166.59 232.381 166.116 232.716 165.562C233.051 165.009 233.259 164.389 233.325 163.748C233.392 163.106 233.315 162.458 233.101 161.849C232.886 161.24 232.539 160.685 232.084 160.223L239.202 146.213L231.012 147.171L225.508 160.328C224.773 161.135 224.363 162.18 224.356 163.266C224.348 164.351 224.744 165.402 225.469 166.218C226.194 167.035 227.196 167.56 228.287 167.695C229.377 167.831 230.48 167.566 231.386 166.951H231.386Z" fill="#A0616A" />
              <path d="M280.252 169.234C279.78 168.789 279.413 168.246 279.176 167.645C278.94 167.044 278.839 166.399 278.882 165.756C278.925 165.112 279.111 164.486 279.425 163.921C279.74 163.356 280.176 162.866 280.703 162.485L276.055 147.497L283.968 149.794L287.168 163.674C287.757 164.591 287.984 165.69 287.808 166.761C287.631 167.833 287.063 168.803 286.21 169.489C285.358 170.174 284.28 170.527 283.182 170.48C282.084 170.433 281.042 169.99 280.252 169.234V169.234Z" fill="#A0616A" />
              <path d="M279.483 161.383C278.998 161.384 278.529 161.211 278.165 160.895C277.801 160.579 277.566 160.143 277.504 159.668L273.806 132.111L267.906 110.576C267.657 109.666 267.62 108.711 267.799 107.785C267.977 106.859 268.367 105.985 268.938 105.229C269.509 104.473 270.246 103.855 271.094 103.422C271.942 102.989 272.879 102.752 273.833 102.729C275.345 102.697 276.819 103.202 277.986 104.151C279.154 105.101 279.939 106.432 280.199 107.903L288.989 158.762C289.037 159.039 289.024 159.322 288.953 159.593C288.881 159.864 288.751 160.117 288.573 160.335C288.395 160.553 288.171 160.731 287.918 160.857C287.665 160.983 287.387 161.055 287.103 161.067L279.57 161.381C279.541 161.382 279.512 161.383 279.483 161.383Z" fill="#44E379" />
              <path d="M235.349 158.288C235.206 158.288 235.064 158.273 234.924 158.243L227.549 156.69C227.272 156.632 227.01 156.515 226.782 156.349C226.553 156.183 226.363 155.971 226.224 155.726C226.085 155.482 226 155.211 225.975 154.932C225.951 154.653 225.986 154.372 226.08 154.107L243.352 105.414C243.858 104.007 244.858 102.825 246.169 102.082C247.481 101.339 249.018 101.084 250.503 101.363C251.44 101.543 252.323 101.932 253.086 102.499C253.849 103.066 254.471 103.797 254.906 104.636C255.341 105.475 255.578 106.401 255.597 107.344C255.617 108.287 255.419 109.222 255.019 110.078L245.549 130.363L237.25 156.896C237.126 157.298 236.875 157.651 236.533 157.902C236.19 158.152 235.775 158.288 235.349 158.288Z" fill="#44E379" />
              <path d="M248.195 79.293C250.687 80.9898 253.645 81.8929 256.673 81.881C255.593 82.6205 254.363 83.12 253.069 83.3452C257.094 84.1979 261.254 84.221 265.288 83.413C266.185 83.271 267.05 82.9774 267.846 82.5452C268.243 82.3265 268.588 82.0277 268.86 81.6684C269.132 81.309 269.324 80.8972 269.425 80.4596C269.693 78.9469 268.5 77.5725 267.259 76.6463C265.361 75.2499 263.171 74.2877 260.85 73.8296C258.529 73.3714 256.133 73.4286 253.837 73.997C252.338 74.3798 250.836 75.0266 249.862 76.216C248.888 77.4054 248.599 79.239 249.527 80.4637L248.195 79.293Z" fill="#2F2E41" />
              <path d="M191.279 8.65762e-10H3.87257C2.84578 0.000871143 1.86131 0.404144 1.13526 1.12129C0.409205 1.83843 0.000907849 2.81084 0 3.82504V184.251C0.000913719 185.265 0.409206 186.238 1.13526 186.955C1.86131 187.672 2.84579 188.075 3.87257 188.076H20.3039V186.984H3.87257C3.13906 186.983 2.43583 186.695 1.91716 186.183C1.39849 185.67 1.10673 184.976 1.10588 184.251V3.82504C1.10673 3.10052 1.39849 2.4059 1.91716 1.89359C2.43583 1.38127 3.13906 1.09309 3.87257 1.09225H191.279C192.013 1.09219 192.717 1.37994 193.237 1.89233C193.756 2.40471 194.049 3.09983 194.05 3.82504V184.251C194.05 184.785 193.891 185.307 193.592 185.751C193.327 186.143 192.967 186.462 192.544 186.681C192.153 186.881 191.719 186.985 191.279 186.984H174.847V188.076H191.279C191.839 188.076 192.392 187.956 192.9 187.725C193.408 187.493 193.86 187.155 194.223 186.734C194.254 186.701 194.282 186.666 194.307 186.629C194.539 186.35 194.726 186.038 194.863 185.703C195.058 185.243 195.157 184.75 195.156 184.251V3.82504C195.155 2.81017 194.746 1.83726 194.019 1.12004C193.292 0.402829 192.306 -2.15643e-05 191.279 8.65762e-10Z" fill="#535461" />
              <path d="M194.6 15.3322H0.551697V16.4256H194.6V15.3322Z" fill="#535461" />
              <path d="M9.96149 11.4832C11.7957 11.4832 13.2826 10.0145 13.2826 8.20279C13.2826 6.39106 11.7957 4.92236 9.96149 4.92236C8.12729 4.92236 6.64038 6.39106 6.64038 8.20279C6.64038 10.0145 8.12729 11.4832 9.96149 11.4832Z" fill="#535461" />
              <path d="M19.5096 11.4832C21.3438 11.4832 22.8308 10.0145 22.8308 8.20279C22.8308 6.39106 21.3438 4.92236 19.5096 4.92236C17.6754 4.92236 16.1885 6.39106 16.1885 8.20279C16.1885 10.0145 17.6754 11.4832 19.5096 11.4832Z" fill="#535461" />
              <path d="M29.0578 11.4832C30.892 11.4832 32.3789 10.0145 32.3789 8.20279C32.3789 6.39106 30.892 4.92236 29.0578 4.92236C27.2236 4.92236 25.7367 6.39106 25.7367 8.20279C25.7367 10.0145 27.2236 11.4832 29.0578 11.4832Z" fill="#535461" />
              <path d="M144.429 40.6436H50.726C49.1949 40.6436 47.7265 40.0428 46.6438 38.9734C45.5611 37.9039 44.9529 36.4535 44.9529 34.9411C44.9529 33.4287 45.5611 31.9783 46.6438 30.9089C47.7265 29.8394 49.1949 29.2386 50.726 29.2386H144.429C145.96 29.2386 147.429 29.8394 148.511 30.9089C149.594 31.9783 150.202 33.4287 150.202 34.9411C150.202 36.4535 149.594 37.9039 148.511 38.9734C147.429 40.0428 145.96 40.6436 144.429 40.6436ZM50.726 30.116C49.4304 30.116 48.1879 30.6243 47.2718 31.5292C46.3557 32.4341 45.841 33.6614 45.841 34.9411C45.841 36.2208 46.3557 37.4481 47.2718 38.353C48.1879 39.2579 49.4304 39.7663 50.726 39.7663H144.429C145.725 39.7663 146.967 39.2579 147.883 38.353C148.799 37.4481 149.314 36.2208 149.314 34.9411C149.314 33.6614 148.799 32.4341 147.883 31.5292C146.967 30.6243 145.725 30.116 144.429 30.116H50.726Z" fill="#535461" />
              <path d="M168.188 120.3H26.9671C24.9655 120.298 23.0466 119.512 21.6313 118.114C20.216 116.716 19.4198 114.82 19.4176 112.843V68.1006C19.4198 66.1236 20.216 64.2281 21.6313 62.8301C23.0466 61.4322 24.9655 60.6458 26.9671 60.6436H168.188C170.19 60.6458 172.108 61.4322 173.524 62.8301C174.939 64.2281 175.735 66.1236 175.737 68.1006V112.843C175.735 114.82 174.939 116.716 173.524 118.114C172.108 119.512 170.19 120.298 168.188 120.3ZM26.9671 61.5209C25.201 61.5228 23.5078 62.2167 22.259 63.4502C21.0102 64.6837 20.3078 66.3562 20.3058 68.1006V112.843C20.3078 114.588 21.0102 116.26 22.259 117.494C23.5078 118.727 25.201 119.421 26.9671 119.423H168.188C169.954 119.421 171.647 118.727 172.896 117.494C174.145 116.26 174.847 114.588 174.849 112.843V68.1006C174.847 66.3562 174.145 64.6837 172.896 63.4502C171.647 62.2167 169.954 61.5228 168.188 61.5209H26.9671Z" fill="#535461" />
              <path d="M116.097 88.0593H66.8025C65.8602 88.0593 64.9566 87.6896 64.2903 87.0315C63.6241 86.3734 63.2498 85.4808 63.2498 84.5501C63.2498 83.6194 63.6241 82.7268 64.2903 82.0687C64.9566 81.4106 65.8602 81.0409 66.8025 81.0409H116.097C117.039 81.0409 117.942 81.4106 118.609 82.0687C119.275 82.7268 119.649 83.6194 119.649 84.5501C119.649 85.4808 119.275 86.3734 118.609 87.0315C117.942 87.6896 117.039 88.0593 116.097 88.0593Z" fill="#44E379" />
              <path d="M161.838 99.9029H66.8025C65.8602 99.9029 64.9566 99.5332 64.2903 98.8751C63.6241 98.217 63.2498 97.3244 63.2498 96.3937C63.2498 95.463 63.6241 94.5704 64.2903 93.9123C64.9566 93.2542 65.8602 92.8845 66.8025 92.8845H161.838C162.78 92.8845 163.684 93.2542 164.35 93.9123C165.016 94.5704 165.391 95.463 165.391 96.3937C165.391 97.3244 165.016 98.217 164.35 98.8751C163.684 99.5332 162.78 99.9029 161.838 99.9029Z" fill="#44E379" />
              <path d="M43.0873 103.632C50.4452 103.632 56.41 97.7398 56.41 90.4719C56.41 83.2041 50.4452 77.3124 43.0873 77.3124C35.7293 77.3124 29.7646 83.2041 29.7646 90.4719C29.7646 97.7398 35.7293 103.632 43.0873 103.632Z" fill="#44E379" />
              <path d="M161.833 114.159H149.398C148.456 114.159 147.552 113.789 146.886 113.131C146.22 112.473 145.845 111.581 145.845 110.65C145.845 109.719 146.22 108.827 146.886 108.168C147.552 107.51 148.456 107.141 149.398 107.141H161.833C162.775 107.141 163.678 107.51 164.345 108.168C165.011 108.827 165.385 109.719 165.385 110.65C165.385 111.581 165.011 112.473 164.345 113.131C163.678 113.789 162.775 114.159 161.833 114.159Z" fill="white" />
              <path d="M161.833 114.159H149.398C148.456 114.159 147.552 113.789 146.886 113.131C146.22 112.473 145.845 111.581 145.845 110.65C145.845 109.719 146.22 108.827 146.886 108.168C147.552 107.51 148.456 107.141 149.398 107.141H161.833C162.775 107.141 163.678 107.51 164.345 108.168C165.011 108.827 165.385 109.719 165.385 110.65C165.385 111.581 165.011 112.473 164.345 113.131C163.678 113.789 162.775 114.159 161.833 114.159Z" fill="#6C63FF" />
              <path d="M168.186 141.355H26.9653C24.9639 141.358 23.0453 142.145 21.6301 143.543C20.2149 144.941 19.4186 146.836 19.4157 148.813V193.555C19.4186 195.532 20.2149 197.427 21.6301 198.825C23.0453 200.223 24.9639 201.009 26.9653 201.012H168.186C170.188 201.01 172.107 200.224 173.522 198.826C174.937 197.428 175.734 195.532 175.736 193.555V148.813C175.734 146.835 174.937 144.94 173.522 143.542C172.107 142.144 170.188 141.358 168.186 141.355ZM174.847 193.555C174.846 195.3 174.144 196.972 172.895 198.206C171.646 199.44 169.952 200.133 168.186 200.135H26.9653C25.1992 200.133 23.5061 199.439 22.2574 198.205C21.0086 196.972 20.3061 195.299 20.3039 193.555V148.813C20.3061 147.068 21.0086 145.396 22.2574 144.162C23.5061 142.929 25.1992 142.235 26.9653 142.233H168.186C169.952 142.234 171.646 142.928 172.895 144.161C174.144 145.395 174.846 147.068 174.847 148.813V193.555Z" fill="#535461" />
              <path d="M116.097 168.771H66.8025C65.8602 168.771 64.9566 168.402 64.2903 167.743C63.6241 167.085 63.2498 166.193 63.2498 165.262C63.2498 164.331 63.6241 163.439 64.2903 162.781C64.9566 162.123 65.8602 161.753 66.8025 161.753H116.097C117.039 161.753 117.942 162.123 118.609 162.781C119.275 163.439 119.649 164.331 119.649 165.262C119.649 166.193 119.275 167.085 118.609 167.743C117.942 168.402 117.039 168.771 116.097 168.771Z" fill="#44E379" />
              <path d="M161.838 180.615H66.8025C65.8602 180.615 64.9566 180.245 64.2903 179.587C63.6241 178.929 63.2498 178.036 63.2498 177.106C63.2498 176.175 63.6241 175.282 64.2903 174.624C64.9566 173.966 65.8602 173.596 66.8025 173.596H161.838C162.78 173.596 163.684 173.966 164.35 174.624C165.016 175.282 165.391 176.175 165.391 177.106C165.391 178.036 165.016 178.929 164.35 179.587C163.684 180.245 162.78 180.615 161.838 180.615Z" fill="#44E379" />
              <path d="M43.0873 184.343C50.4452 184.343 56.41 178.452 56.41 171.184C56.41 163.916 50.4452 158.024 43.0873 158.024C35.7293 158.024 29.7646 163.916 29.7646 171.184C29.7646 178.452 35.7293 184.343 43.0873 184.343Z" fill="#44E379" />
              <path d="M161.833 194.871H149.398C148.456 194.871 147.552 194.501 146.886 193.843C146.22 193.185 145.845 192.292 145.845 191.362C145.845 190.431 146.22 189.538 146.886 188.88C147.552 188.222 148.456 187.853 149.398 187.853H161.833C162.775 187.853 163.678 188.222 164.345 188.88C165.011 189.538 165.385 190.431 165.385 191.362C165.385 192.292 165.011 193.185 164.345 193.843C163.678 194.501 162.775 194.871 161.833 194.871Z" fill="#6C63FF" />
              <path d="M290.556 244H228.383C228.265 244 228.152 243.954 228.069 243.872C227.986 243.789 227.939 243.678 227.939 243.561C227.939 243.445 227.986 243.333 228.069 243.251C228.152 243.169 228.265 243.123 228.383 243.123H290.556C290.674 243.123 290.787 243.169 290.87 243.251C290.953 243.333 291 243.445 291 243.561C291 243.678 290.953 243.789 290.87 243.872C290.787 243.954 290.674 244 290.556 244Z" fill="#535461" />
            </svg>
          </li>
          <li className="list-text">
            <div className="facil-text">
            <h2>
              Você pode ver o serviço que prestamos
              quando preferir
          </h2>
          <h3 className="facil-text-ligth">
          Tudo o que a gente faz fica salvo em sua conta no site e no aplicativo. Você pode ver o que foi feito quando foi feito na hora que dejar.
          </h3>
          </div>


          <div className="facil-text">
            <h2>
              Você pode ver o serviço que prestamos
              quando preferir
          </h2>
          <h3 className="facil-text-ligth">
          Você recebe notificações em tempo real
quando o serviço terminar
          </h3>
          </div>

          
          </li>
        </ul>
      </Container>
    </div>

  );
}

export default Navbar;