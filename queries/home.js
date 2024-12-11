import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query {
    page(id: "cG9zdDoxNg==") {
      title
      link
      bannerHome {
        banner {
          node {
            link
          }
        }
        textBanner
        textBanner2
        textBanner3
        subtitleupper
        buttonText
        buttonLinkBannerHome
        subtitle_bottom
      }

      bannerHomesecond {
        rightsmallsectionlink
        rightsmallsectiontext
        rightsmallsectionlinktext
        heading_second_section
        buttonLinkSecondSection
        buttonText
        subtitleText
        firstRightImage {
          node {
            link
          }
        }
        secondRightImage {
          node {
            link
          }
        }
        bannersecondbackground {
          node {
            link
          }
        }
      }

      sectionHomethird {
        firstcolumnimage {
          node {
            link
          }
        }
        buttonLink1ThirdSection
        buttonLink2ThirdSection
        buttonLink3ThirdSection
        firstcolumnheading
        subtitletextfirst
        buttontxtfirst
        secondcolumnimage {
          node {
            link
          }
        }
        secondcolumnheading
        subtitletextsecond
        buttontxtsecond

        thirdcolumnimage {
          node {
            link
          }
        }
        thirdcolumnheading
        subtitletextthird
        buttontxtthird
      }

      homefourtsection {
        mainheadingfourth
        firstimage {
          node {
            link
          }
        }
        firstsubtitle1
        firstheading
        firstparagraph

        secondimage {
          node {
            link
          }
        }
        secondheading
        secondsubtitle
        secondparagraph

        thirdimage {
          node {
            link
          }
        }
        thirdsubtitle
        thirdheading
        thirdparagraph
      }

      homefifthsection {
        mainheadingfifth
        fifthheadingsimple
        buttonlinkone
        buttonlinksecond
        fifthfirstimage {
          node {
            link
          }
        }
        fifthfirstsubtitle
        fifthbuttonone
        textbuttonsecond
        authorimage {
          node {
            link
          }
        }
        authortitle
        authordesignation
      }
      patnerssection {
        linknithbox
        mainheading
        firstsubtitlepatner
        imagefirst {
          node {
            link
          }
        }
        image5 {
          node {
            link
          }
        }
        image2 {
          node {
            link
          }
        }
        image3 {
          node {
            link
          }
        }
        image4 {
          node {
            link
          }
        }
        image6 {
          node {
            link
          }
        }
        image7 {
          node {
            link
          }
        }
        image8 {
          node {
            link
          }
        }

        textninthbox
        linktextninthbox
      }
      homesixthsection {
        heading
        paragraph
        author
        designations
        rightimage {
          node {
            link
          }
        }
      }
    }
  }
`;

export const POSTS_QUERY_SEC = gql`
  query {
    posts {
      nodes {
        featuredImage {
          node {
            link
          }
        }
        title
      }
    }
  }
`;
