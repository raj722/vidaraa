"use client";

import { useState } from "react";

interface Quiz {
  id: number;
  topic: string;
  questions: string[];
}

export default function QuizzesPage() {
  const [topic, setTopic] = useState("");
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [showAnswers, setShowAnswers] = useState<number | null>(null);

  const generateMockQuestions = (topic: string) => [
    `What is ${topic}?`,
    `Explain the basics of ${topic}.`,
    `Give an example of ${topic}.`,
  ];

  const handleGenerateQuiz = () => {
    if (!topic.trim()) return;
    const newQuiz: Quiz = {
      id: Date.now(),
      topic,
      questions: generateMockQuestions(topic),
    };
    setQuizzes([newQuiz, ...quizzes]);
    setTopic("");
  };

  const handleDelete = (id: number) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">AI Quiz Generator</h2>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Generate Quiz</h3>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter topic or subject"
            className="border rounded px-4 py-2 w-full"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button
            onClick={handleGenerateQuiz}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Generate
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Generated Quizzes</h3>
        {quizzes.length === 0 ? (
          <p className="text-gray-500">No quizzes generated yet.</p>
        ) : (
          <ul className="space-y-4">
            {quizzes.map((quiz) => (
              <li key={quiz.id} className="border p-4 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{quiz.topic}</h4>
                    <button
                      onClick={() =>
                        setShowAnswers((prev) => (prev === quiz.id ? null : quiz.id))
                      }
                      className="text-blue-600 text-sm hover:underline"
                    >
                      {showAnswers === quiz.id ? "Hide Questions" : "View Questions"}
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(quiz.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
                {showAnswers === quiz.id && (
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                    {quiz.questions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
