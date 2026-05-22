# # from rest_framework.decorators import api_view
# # from rest_framework.response import Response

# # @api_view(['GET'])
# # def test_api(request):
# #     return Response({"message": "Backend connected successfully"})

# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from pipeline import run_research_pipeline


# @api_view(['POST'])
# def chat_api(request):
#     topic = request.data.get("message")

#     result = run_research_pipeline(topic)

#     return Response({
#         "search_result": result["search_result"],
#         "reader_result": result["reader_result"],
#         "report": result["report"],
#         "feedback": result["feedback"]
#     })

from rest_framework.decorators import api_view
from rest_framework.response import Response
from pipeline import run_research_pipeline


@api_view(['POST'])
def chat_api(request):
    try:
        topic = request.data.get("message")

        result = run_research_pipeline(topic)

        return Response({
            "search_result": result["search_result"],
            "reader_result": result["reader_result"],
            "report": result["report"],
            "feedback": result["feedback"]
        })

    except Exception as e:
        print("ERROR:", str(e))   # prints in terminal
        return Response({
            "error": str(e)
        }, status=500)