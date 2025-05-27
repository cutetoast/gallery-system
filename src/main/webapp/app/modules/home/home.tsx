import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Alert, Col, Row, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlus, faEye, faCalendarAlt, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <div className="gallery-home">
      <Row>
        <Col md="12">
          <div className="hero-section text-center mb-5">
            <FontAwesomeIcon icon={faImage} size="4x" className="text-primary mb-3" />
            <h1 className="display-4 mb-3">
              <Translate contentKey="home.gallery.title">Photo Gallery System</Translate>
            </h1>
            <p className="lead text-muted mb-4">
              <Translate contentKey="home.gallery.subtitle">Organize and browse your photo albums by event or date</Translate>
            </p>

            {account?.login ? (
              <div className="gallery-actions">
                <Button color="primary" size="lg" tag={Link} to="/gallery" className="me-3">
                  <FontAwesomeIcon icon={faEye} className="me-2" />
                  <Translate contentKey="home.gallery.viewGallery">View Gallery</Translate>
                </Button>
                <Button color="outline-primary" size="lg" tag={Link} to="/album/new">
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  <Translate contentKey="home.gallery.createAlbum">Create Album</Translate>
                </Button>
              </div>
            ) : (
              <div className="auth-prompt">
                <Alert color="info" className="d-inline-block">
                  <Translate contentKey="home.gallery.loginPrompt">Please sign in to access the gallery</Translate>
                </Alert>
              </div>
            )}
          </div>
        </Col>
      </Row>

      <Row className="features-section">
        <Col md="4" className="mb-4">
          <Card className="h-100 text-center">
            <CardBody>
              <FontAwesomeIcon icon={faSortAlphaDown} size="2x" className="text-primary mb-3" />
              <CardTitle tag="h5">
                <Translate contentKey="home.gallery.features.sortByEvent">Sort by Event</Translate>
              </CardTitle>
              <CardText>
                <Translate contentKey="home.gallery.features.sortByEventDesc">
                  Organize your albums by event names for easy browsing
                </Translate>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mb-4">
          <Card className="h-100 text-center">
            <CardBody>
              <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="text-primary mb-3" />
              <CardTitle tag="h5">
                <Translate contentKey="home.gallery.features.sortByDate">Sort by Date</Translate>
              </CardTitle>
              <CardText>
                <Translate contentKey="home.gallery.features.sortByDateDesc">
                  Browse albums chronologically with date-based organization
                </Translate>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4" className="mb-4">
          <Card className="h-100 text-center">
            <CardBody>
              <FontAwesomeIcon icon={faImage} size="2x" className="text-primary mb-3" />
              <CardTitle tag="h5">
                <Translate contentKey="home.gallery.features.thumbnails">Thumbnail Display</Translate>
              </CardTitle>
              <CardText>
                <Translate contentKey="home.gallery.features.thumbnailsDesc">
                  Beautiful thumbnail previews for quick album identification
                </Translate>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {account?.login ? (
        <Row>
          <Col md="12">
            <Alert color="success" className="text-center">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                Welcome back, {account.login}! You can now access your photo gallery.
              </Translate>
            </Alert>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md="12">
            <Alert color="warning" className="text-center">
              <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>
              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix">
                , you can try the default accounts:
                <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
                <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
              </Translate>
            </Alert>

            <Alert color="info" className="text-center">
              <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
              <Link to="/account/register" className="alert-link">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </Alert>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Home;
