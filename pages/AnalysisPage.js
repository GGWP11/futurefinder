import React from 'react'

import { Header, Footer, PageTitle, Question, FormFooter} from '../components';
import './pages.css';

const AnalysisPage = () => {
  return (
    <div className="Page">
      <Header />
      <PageTitle title="Career Path Analysis"/>
      <Question question="I enjoy working independently and managing my own schedule." />
      <Question question="I feel energized and motivated when I'm working with a team on a project." />
      <Question question="I prefer working with numbers and data over written or spoken communication." />
      <Question question="I find satisfaction in helping others and making a difference in their lives." />
      <Question question="I enjoy exploring and learning new things, even if they're outside of my comfort zone." />
      <FormFooter totalPages={5} currentPage={4} />
      <Footer />
    </div>
  )
}

export default AnalysisPage;
