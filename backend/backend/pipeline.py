# from agents.agent1 import buid_search_agent
# from agents.agent2 import buid_reader_agent
# from chains.critic_chain import critic_chain
# from chains.writer_chain import writer_chain


# def run_research_pipeline(topic:str)->dict:


#     state = {}

#     #search agent working



#     search_agent = buid_search_agent()
#     search_result = search_agent.invoke({

#         "messages":[("user",f"find recent reliable and detailed information about :{topic}")]

#     })

#     state["search_result"] = search_result['messages'][-1].content

  



#     # reader agent



#     reader_agent = buid_reader_agent()
#     reader_result = reader_agent.invoke({
#                 "messages": [("user",
#             f"Based on the following search results about '{topic}', "
#             f"pick the most relevant URL and scrape it for deeper content.\n\n"
#             f"Search Results:\n{state['search_result'][:800]}"
#         )]
#     })


#     state["reader_result"] = reader_result['messages'][-1].content




#     # writer chain




#     research_combined = (
#         f"SEARCH RESULTS : \n {state['search_result']} \n\n"
#         f"DETAILED SCRAPED CONTENT : \n {state['reader_result']}"
#     )

#     state["report"] = writer_chain.invoke({
#         "topic" : topic,
#         "research" : research_combined
#     })


#     #critic report 


#     state["feedback"] = critic_chain.invoke({
#         "report":state['report']
#     })


#     return state



# # if __name__ == "__main__":
# #     topic = input("\n Enter a research topic : ")
# #     run_research_pipeline(topic)



from agents.agent1 import buid_search_agent
from agents.agent2 import buid_reader_agent
from chains.critic_chain import critic_chain
from chains.writer_chain import writer_chain


def run_research_pipeline(topic: str) -> dict:

    state = {}

    # Search agent
    search_agent = buid_search_agent()

    search_prompt = f"find recent reliable and detailed information about: {topic}"

    search_result = search_agent.invoke({
        "input": search_prompt
    })

    state["search_result"] = search_result["output"]



    # Reader agent
    reader_agent = buid_reader_agent()

    reader_prompt = (
        f"Based on the following search results about '{topic}', "
        f"pick the most relevant URL and scrape it for deeper content.\n\n"
        f"Search Results:\n{state['search_result'][:800]}"
    )

    reader_result = reader_agent.invoke({
        "input": reader_prompt
    })

    state["reader_result"] = reader_result["output"]



    # Writer chain
    research_combined = (
        f"SEARCH RESULTS:\n{state['search_result']}\n\n"
        f"DETAILED SCRAPED CONTENT:\n{state['reader_result']}"
    )

    state["report"] = writer_chain.invoke({
        "topic": topic,
        "research": research_combined
    })


    # Critic chain
    state["feedback"] = critic_chain.invoke({
        "report": state["report"]
    })

    return state