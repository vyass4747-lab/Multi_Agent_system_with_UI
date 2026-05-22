from langchain.agents import initialize_agent, AgentType
from langchain_mistralai import ChatMistralAI
from dotenv import load_dotenv
load_dotenv()
from tools.tool2  import scrape_webpage

llm = ChatMistralAI(model="mistral-small-2506")

def buid_reader_agent():
    return initialize_agent(
        tools=[scrape_webpage],
        llm=llm,
        agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
        verbose=True,
        handle_parsing_errors=True 
    )
