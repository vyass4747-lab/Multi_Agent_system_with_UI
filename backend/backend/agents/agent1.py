from langchain_mistralai import ChatMistralAI
from langchain.agents import initialize_agent, AgentType
from dotenv import load_dotenv
from tools.tool1 import web_search
load_dotenv()

llm = ChatMistralAI(model="mistral-small-2506")



def buid_search_agent():
    return initialize_agent(
        tools=[web_search],
        llm=llm,
        agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
        verbose=True,
        handle_parsing_errors=True
    )


