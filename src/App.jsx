import './App.css'
import Player from './Player';

function App() {
  return (
    <>
      <div className="bg-myspace-light min-h-screen pb-4">
        <div id="profile_wrapper" className="max-w-6xl pb-4 mx-auto bg-white md:w-800">
          <div id="profile_navbar" className="w-full px-4 bg-myspace-music flex justify-between items-center">
            <h1 className="text-s text-white mr-4"><a href="#">MYSPACE MUSIC</a></h1>
            <ul className="flex flex-wrap text-center items-center justify-center py-2 space-x-1">
              <li className="text-xs text-white"><a href="#">Music Videos</a></li>
              <li className="text-xs text-black">|</li>
              <li className="text-xs text-white"><a href="#">Directory</a></li>
              <li className="text-xs text-black">|</li>
              <li className="text-xs text-white"><a href="#">Search</a></li>
              <li className="text-xs text-black">|</li>
              <li className="text-xs text-white"><a href="#">Top Artists</a></li>
              <li className="text-xs text-black">|</li>
              <li className="text-xs text-white"><a href="#">Shows</a></li>
              <li className="text-xs text-black">|</li>
              <li className="text-xs text-white"><a href="#">Music Forums</a></li>
              <li className="text-xs text-black">|</li>
              <li className="text-xs text-white"><a href="#">Music Classifieds</a></li>
              <li className="text-xs text-black">|</li>
              <li className="text-xs text-white"><a href="#">Artist Signup</a></li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
            <div id="profile_sidebar_left" className="col-span-2 px-4">
              <div id="profile_name" className="mt-4 mb-2">
                <span className="text-lg font-bold tracking-wide">Debb and Winnie</span>
              </div>
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-3">
                  <div className="space-y-2">
                    <img src="./img/daw_cereal.jpg" />
                    <span id="profile_view_my" className="flex justify-center space-x-1 text-xs font-semibold">View My: <a
                      href="#"
                      className="mx-1 font-bold text-myspace-blue-600 hover:text-myspace-red-600 hover:underline">Pics</a> |
                      <a href="#"
                        className="mx-1 font-bold text-myspace-blue-600 hover:text-myspace-red-600 hover:underline">Videos</a></span>
                  </div>
                </div>
                <div className="col-span-2">
                  <div id="profile_sideinfo" className="space-y-2 text-xs leading-3">
                    <span id="profile_location" className="block leading-4 tracking-wide">BROOKLYN, United States</span>
                    <span id="profile_view" className="block leading-4 tracking-wide">Profile views: 64209</span>
                    <span className="flex justify-start my-1 leading-4 tracking-wide text-xs">
                      <img className="w-4" src="img/onlinenow.gif" alt="" />
                      <span className="text-green-500 font-bold ml-1 flex items-center">Online Now!</span>
                    </span>
                    <span id="profile_lastloggedin" className="block leading-4 tracking-wide">Last Login: {(new Date()).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="space-y-4">
                  <div id="profile_contacting" className="border-2 border-t-0 border-myspace-blue-300">
                    <div id="profile_contacting_title">
                      <h2 className="px-2 py-1 text-xs font-bold text-left text-white bg-myspace-blue-300">Contacting Debb and Winnie</h2>
                    </div>
                    <div id="profile_contacting_box" className="grid grid-cols-2 py-1">
                      <a href="#"><img className="col-span-1 mx-auto" src="img/sendMailIcon.gif" alt="Send Message" /></a>
                      <a href="#"><img className="col-span-1 mx-auto" src="img/forwardMailIcon.gif"
                        alt="Forward to Friend" /></a>
                      <a href="#"><img className="col-span-1 mx-auto" src="img/addFriendIcon.gif" alt="Add to Friends" /></a>
                      <a href="#"><img className="col-span-1 mx-auto" src="img/addFavoritesIcon.gif"
                        alt="Add to Favorites" /></a>
                      <a href="#"><img className="col-span-1 mx-auto" src="img/messagefriend.gif" alt="Instant Message" /></a>
                      <a href="#"><img className="col-span-1 mx-auto" src="img/blockUser.gif" alt="Block User" /></a>
                      <a href="#"><img className="col-span-1 mx-auto" src="img/addToGroupIcon.gif" alt="Add to Group" /></a>
                      <a href="#"><img className="col-span-1 mx-auto" src="img/rankUserIcon.gif" alt="Rank User" /></a>
                    </div>
                  </div>
                  <div id="profile_urlbox" className="p-1 border border-myspace-blue-300">
                    <span className="block text-xs font-bold">MySpace URL:</span>
                    <span className="block text-xs font-normal">https://debbandwinnie.com</span>
                  </div>
                  <table id="profile_details"
                    className="table w-full border-2 border-t-0 border-separate border-myspace-blue-300">
                    <caption id="profile_details_title">
                      <h2 className="px-2 py-1 text-xs font-bold text-left text-white bg-myspace-blue-300">Debb and Winnie's Details</h2>
                    </caption>
                    <tbody>
                      <tr id="profile_details_membersince">
                        <th
                          className="w-5/12 p-1 text-xs font-bold text-left align-top bg-myspace-blue-200 text-myspace-blue-700"
                          scope="row">Member Since</th>
                        <td className="w-7/12 p-1 text-xs bg-myspace-blue-100">01/04/2024</td>
                      </tr>
                      <tr id="profile_details_herfor">
                        <th
                          className="w-5/12 p-1 text-xs font-bold text-left align-top bg-myspace-blue-200 text-myspace-blue-700"
                          scope="row">Here For</th>
                        <td className="w-7/12 p-1 text-xs bg-myspace-blue-100">Networking, Friends</td>
                      </tr>
                      <tr id="profile_details_hometown">
                        <th
                          className="w-5/12 p-1 text-xs font-bold text-left align-top bg-myspace-blue-200 text-myspace-blue-700"
                          scope="row">Hometown</th>
                        <td className="w-7/12 p-1 text-xs bg-myspace-blue-100">Brooklyn, NY</td>
                      </tr>
                      <tr id="profile_details_zodiac_sign">
                        <th
                          className="w-5/12 p-1 text-xs font-bold text-left align-top bg-myspace-blue-200 text-myspace-blue-700"
                          scope="row">Zodiac Sign</th>
                        <td className="w-7/12 p-1 text-xs bg-myspace-blue-100">Cancers</td>
                      </tr>
                      <tr id="profile_details_occupation">
                        <th
                          className="w-5/12 p-1 text-xs font-bold text-left align-top bg-myspace-blue-200 text-myspace-blue-700"
                          scope="row">Occupation</th>
                        <td className="w-7/12 p-1 text-xs bg-myspace-blue-100">Cool Dudes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div id="profile_sidebar_right" className="col-span-3 px-4">
              <div className="mt-4 space-y-4">
                <Player />
                <div id="profile_blurbs" className="">
                  <header id="profile_blurbs_title" className="px-2 py-1 bg-myspace-orange-100">
                    <h2 className="text-sm font-bold text-myspace-orange-200">Debb and Winnie's Blurbs</h2>
                  </header>
                  <h3 id="profile_blurbs_about_me_title" className="mt-2 mb-1 text-sm font-bold text-myspace-orange-200">About
                    me:
                  </h3>
                  <div id="profile_blurbs_biography" className="space-y-2 text-xs">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus lorem eu libero pharetra dapibus.
                      Phasellus odio ex,
                      faucibus id bibendum et, semper semper risus. Suspendisse eu interdum quam. Vivamus lacinia lorem
                      quam, non semper ipsum
                      vulputate eu. Nam id fermentum elit, volutpat scelerisque turpis. Morbi aliquam at sapien et semper.
                      Aenean a urna
                      nulla.
                    </p>
                  </div>
                  <h3 id="profile_blurbs_about_me_title" className="mt-2 mb-1 text-sm font-bold text-myspace-orange-200">Who I'd
                    like to meet:
                  </h3>
                  <div id="profile_blurbs_biography" className="space-y-2 text-xs">
                    <p>Nullam cursus fringilla pharetra. Vestibulum feugiat nunc purus, non placerat nunc porttitor et.
                      Praesent eget nunc sed
                      odio mollis venenatis. Vestibulum eu commodo enim, quis cursus lorem. Vestibulum id risus eget nulla
                      cursus lobortis.
                      Nullam mattis mi sit amet metus tempus pharetra non accumsan dolor. Cras sit amet est in justo
                      interdum aliquet. Donec
                      bibendum in nibh eu facilisis. Duis ultrices diam augue, a porttitor leo accumsan nec.
                    </p>
                  </div>
                </div>
                <div id="profile_friends" className="friends">
                  <header id="profile_friends_title" className="px-2 py-1 bg-myspace-orange-100">
                    <h2 className="text-sm font-bold text-myspace-orange-200">Debb and Winnie's Friend Space</h2>
                  </header>
                  <p id="profile_friends_following_info" className="my-2 text-xs"><b>Debb and Winnie has <span
                    className="text-sm font-normal text-myspace-red-600">45</span> friends.</b></p>
                  <div className="grid grid-cols-3 gap-2 space-y-3 sm:grid-cols-4">
                    <div className="flex flex-wrap items-start justify-center">
                      <div>
                        <div className="text-xs font-bold text-center">
                          <a href="" className="text-myspace-blue-600">Michael Foster</a>
                        </div>
                        <a href="" className="">
                          <img
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                        </a>
                        <span className="flex justify-center my-1 leading-4 tracking-wide text-xs">
                          <img className="w-4" src="img/onlinenow.gif" alt="" />
                          <span className="text-green-500 font-bold ml-1 flex items-center">Online Now!</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-start justify-center">
                      <div>
                        <div className="text-xs font-bold text-center">
                          <a href="" className="text-myspace-blue-600">Dries Vincent</a>
                        </div>
                        <a href="" className="">
                          <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                        </a>
                        <span className="flex justify-center my-1 leading-4 tracking-wide text-xs">
                          <img className="w-4" src="img/onlinenow.gif" alt="" />
                          <span className="text-green-500 font-bold ml-1 flex items-center">Online Now!</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-start justify-center">
                      <div>
                        <div className="text-xs font-bold text-center">
                          <a href="" className="text-myspace-blue-600">Lindsay Walton</a>
                        </div>
                        <a href="" className="">
                          <img
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-start justify-center">
                      <div>
                        <div className="text-xs font-bold text-center">
                          <a href="" className="text-myspace-blue-600">Courtney Henry</a>
                        </div>
                        <a href="" className="">
                          <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-start justify-center">
                      <div>
                        <div className="text-xs font-bold text-center">
                          <a href="" className="text-myspace-blue-600">Tom Cook</a>
                        </div>
                        <a href="" className="">
                          <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                        </a>
                        <span className="flex justify-center my-1 leading-4 tracking-wide text-xs">
                          <img className="w-4" src="img/onlinenow.gif" alt="" />
                          <span className="text-green-500 font-bold ml-1 flex items-center">Online Now!</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-start justify-center">
                      <div>
                        <div className="text-xs font-bold text-center">
                          <a href="" className="text-myspace-blue-600">Whitney Francis</a>
                        </div>
                        <a href="" className="">
                          <img
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-start justify-center">
                      <div>
                        <div className="text-xs font-bold text-center">
                          <a href="" className="text-myspace-blue-600">Leonard Krasner</a>
                        </div>
                        <a href="" className="">
                          <img
                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                        </a>
                        <span className="flex justify-center my-1 leading-4 tracking-wide text-xs">
                          <img className="w-4" src="img/onlinenow.gif" alt="" />
                          <span className="text-green-500 font-bold ml-1 flex items-center">Online Now!</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 w-full">
                    <a href=""
                      className="flex items-end justify-end text-myspace-red-600 hover:underline text-xs font-bold">View All of
                      Debb and Winnie's Friends</a>
                  </div>
                </div>
                <div id="comments" className="comment-wall mt-4">
                  <header className="bg-myspace-orange-100 px-2 py-1">
                    <h2 className="text-myspace-orange-200 font-bold text-sm">Debb and Winnie's Friends Comments</h2>
                  </header>
                  <p className="text-xs my-2 flex items-center"><b className="mr-auto">Displaying <span
                    className="text-myspace-red-600 font-normal text-sm">3</span> comments</b> (<button type="button"
                      className="font-bold text-myspace-blue-600 hover:text-myspace-red-600 hover:underline">Add
                      Comment</button>)
                  </p>
                  <table className="table border-separate w-full">
                    <tbody>
                      <tr>
                        <th className="bg-myspace-orange-300 w-4/12 p-2" scope="row">
                          <figure>
                            <span className="text-myspace-blue-600 font-bold text-xs text-center">Leonard Krasner</span>
                            <img
                              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                              className="w-2/3 mx-auto" />
                            <span className="flex justify-center my-1 leading-4 tracking-wide text-xs">
                              <img className="w-4" src="img/onlinenow.gif" alt="" />
                              <span className="text-green-500 font-bold ml-1 flex items-center">Online Now!</span>
                            </span>
                          </figure>
                        </th>
                        <td className="bg-myspace-orange-100 w-8/12 p-2">
                          <h3 className="text-sm text-left mb-2 font-bold">1/01/2022 6:54 PM</h3>
                          <p className="text-xs font-normal text-left m-0">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut rhoncus lorem eu libero pharetra dapibus. Phasellus odio ex,
                            faucibus id bibendum et, semper semper risus. Suspendisse eu interdum quam. Vivamus lacinia
                            lorem quam, non semper ipsum
                            vulputate eu. Nam id fermentum elit, volutpat scelerisque turpis. Morbi aliquam at sapien et
                            semper. Aenean a urna
                            nulla.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-myspace-orange-300 w-4/12 p-2" scope="row">
                          <figure>
                            <span className="text-myspace-blue-600 font-bold text-xs text-center">Courtney Henry</span>
                            <img
                              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                              className="w-2/3 mx-auto" />
                          </figure>
                        </th>
                        <td className="bg-myspace-orange-100 w-8/12 p-2">
                          <h3 className="text-sm text-left mb-2 font-bold">1/01/2022 1:02 PM</h3>
                          <p className="text-xs font-normal text-left m-0">Lorem ipsum dolor sit amet, consectetur adipinulla.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-myspace-orange-300 w-4/12 p-2" scope="row">
                          <figure>
                            <span className="text-myspace-blue-600 font-bold text-xs text-center">Tom Cook</span>
                            <img
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                              className="w-2/3 mx-auto" />
                            <span className="flex justify-center my-1 leading-4 tracking-wide text-xs">
                              <img className="w-4" src="img/onlinenow.gif" alt="" />
                              <span className="text-green-500 font-bold ml-1 flex items-center">Online Now!</span>
                            </span>
                          </figure>
                        </th>
                        <td className="bg-myspace-orange-100 w-8/12 p-2">
                          <h3 className="text-sm text-left mb-2 font-bold">1/01/2022 2:34 AM</h3>
                          <p className="text-xs font-normal text-left m-0">Vivamus lacinia lorem quam, non semper ipsum
                            vulputate eu. Nam id fermentum elit, volutpat scelerisque turpis. Morbi aliquam at sapien et
                            semper. Aenean a urna
                            nulla.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="profile_footer" className="max-w-6xl mx-auto mt-4 mb-6 md:w-800">
          <div className="flex flex-wrap items-center justify-center text-sm text-center text-gray-800">
            <div id="profile_footer_info" className="w-full">
              <ul className="flex flex-wrap text-center items-center justify-center py-2 mr-auto space-x-1">
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">About</a></li>
                <li className="text-xs text-black">|</li>
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">FAQ</a></li>
                <li className="text-xs text-black">|</li>
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">Terms</a></li>
                <li className="text-xs text-black">|</li>
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">Privacy</a></li>
                <li className="text-xs text-black">|</li>
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">Safety Tips</a>
                </li>
                <li className="text-xs text-black">|</li>
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">Contact Myspace</a>
                </li>
                <li className="text-xs text-black">|</li>
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">Report
                  Inappropriate Content</a>
                </li>
                <li className="text-xs text-black">|</li>
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">Promote!</a></li>
                <li className="text-xs text-black">|</li>
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">Advertise</a></li>
                <li className="text-xs text-black">|</li>
                <li className="text-xs"><a href="#" className="text-myspace-blue-500 hover:text-myspace-red-600">MySpace
                  International</a>
                </li>
              </ul>
            </div>
            <div id="profile_footer_copyright" className="w-full text-xs">
              &copy;2003-2006 MySpace.com. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
