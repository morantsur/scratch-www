var React = require('react');
var injectIntl = require('react-intl').injectIntl;
var FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
var FormattedMessage = require('react-intl').FormattedMessage;
var render = require('../../lib/render.jsx');

var MasonryGrid = require('../../components/masonrygrid/masonrygrid.jsx');
var Page = require('../../components/page/www/page.jsx');
var TitleBanner = require('../../components/title-banner/title-banner.jsx');
var TTTTile = require('../../components/ttt-tile/ttt-tile.jsx');
var Tiles = require('./microworlds.json');
var Tiles = require('./projects.json');

const basepath = 'http://localhost:8601';

require('./microworldshomepage.scss');

var MicroworldsHomepage = injectIntl(React.createClass({
    type: 'MicroworldsHomepage',
    render: function () {
        return (
            <div className="microworlds">
                <TitleBanner className="masthead mod-blue-bg">
                    <h1 className="title-banner-h1">
                        <FormattedMessage id="microworlds.title" />
                    </h1>
                    <p className="intro title-banner-p">
                        <FormattedHTMLMessage id="microworlds.subTitle" />
                    </p>
                </TitleBanner>
                <div className="inner">
                    <MasonryGrid >
                        {Object.keys(Tiles).map(
                            function (key) {
                                var tile = Tiles[key];
                                return <TTTTile
                                    key={key}
                                    title={tile.title}
                                    tutorialLoc={basepath + tile.tutorialLoc}
                                    thumbUrl={tile.thumbUrl}
                                    />;
                            }, this)
                        }
                    </MasonryGrid>
                </div>
            </div>
        );
    }
}));

render(<Page><MicroworldsHomepage /></Page>, document.getElementById('app'));
