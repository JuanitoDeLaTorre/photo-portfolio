import { Grid, Button, Segment, Header } from 'semantic-ui-react';

export default function CVResume() {
  return (
    <div style={{ padding: '0rem 0px 0px 0px', margin: '5vh auto auto 50px' }}>
      <Header as="h1">CV + Resume</Header>

      <Grid columns={2} stackable doubling>
        {/* CV */}
        <Grid.Column>
          <Segment>
            <Header as="h3">Curriculum Vitae</Header>
            <iframe
              src="/credentials/resume.pdf#page-fit=fit"
              title="CV"
              style={{ width: '100%', height: '70vh', border: 'none' }}
            />
            <Button
              color="blue"
              href="/credentials/resume.pdf"
              download="JohnThomas_CV.pdf"
              style={{ marginTop: '1rem' }}
            >
              Download CV
            </Button>
          </Segment>
        </Grid.Column>

        {/* Resume */}
        <Grid.Column>
          <Segment>
            <Header as="h3">Resume</Header>
            <iframe
              src="/credentials/resume.pdf"
              title="Resume"
              style={{ width: '100%', height: '70vh', border: 'none' }}
            />
            <Button
              color="green"
              href="/credentials/resume.pdf"
              download="JohnThomas_Resume.pdf"
              style={{ marginTop: '1rem' }}
            >
              Download Resume
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}