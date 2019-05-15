import React, { Component } from "react";
import "./App.css";
import Header from "./Header";

class App extends Component {
  state = {
    userInput: "",
    wentWellItems: [],
    toImproveItems: [],
    actionItems: [],
    wentWellLikes: [],
    toImproveLikes: [],
    actionItemLikes: []
  };

  addWentWell = e => {
    e.preventDefault();
    this.setState({
      wentWellItems: [...this.state.wentWellItems, ""],
      wentWellLikes: [...this.state.wentWellLikes, 0]
    });
  };

  addImprove = e => {
    e.preventDefault();
    this.setState({
      toImproveItems: [...this.state.toImproveItems, ""],
      toImproveLikes: [...this.state.toImproveLikes, 0]
    });
  };
  addAction = e => {
    e.preventDefault();
    this.setState({
      actionItems: [...this.state.actionItems, ""],
      actionItemLikes: [...this.state.actionItemLikes, 0]
    });
  };

  deleteWentWell = deleteIndex => {
    const wentWellItems = this.state.wentWellItems.filter((wentWell, index) => {
      return index !== deleteIndex;
    });

    const wentWellLikes = this.state.wentWellLikes.filter(
      (wentWellLikes, index) => {
        return index !== deleteIndex;
      }
    );

    this.setState({ wentWellItems });
    this.setState({ wentWellLikes });
  };

  deleteImprove = deleteIndex => {
    const toImproveItems = this.state.toImproveItems.filter(
      (improve, index) => {
        return index !== deleteIndex;
      }
    );

    const toImproveLikes = this.state.toImproveLikes.filter(
      (toImproveLikes, index) => {
        return index !== deleteIndex;
      }
    );
    this.setState({ toImproveItems });
    this.setState({ toImproveLikes });
  };

  deleteAction = deleteIndex => {
    const actionItems = this.state.actionItems.filter((action, index) => {
      return index !== deleteIndex;
    });

    const actionItemLikes = this.state.actionItemLikes.filter(
      (actionItemLikes, index) => {
        return index !== deleteIndex;
      }
    );
    this.setState({ actionItems });
    this.setState({ actionItemLikes });
  };

  changeWell = (whatToChange, index) => {
    const currentWentWell = this.state.wentWellItems;
    currentWentWell[index] = whatToChange;

    this.setState({
      wentWellItems: currentWentWell
    });
  };

  changeImprove = (whatToChange, index) => {
    const currentImprove = this.state.toImproveItems;
    currentImprove[index] = whatToChange;

    this.setState({
      toImproveItems: currentImprove
    });
  };

  changeAction = (whatToChange, index) => {
    const currentAction = this.state.actionItems;
    currentAction[index] = whatToChange;

    this.setState({
      actionItems: currentAction
    });
  };

  likeWentWell = (e, index, upordown) => {
    const currentWentWellLikes = this.state.wentWellLikes;
    currentWentWellLikes[index] = currentWentWellLikes[index] + upordown;

    this.setState({
      wentWellLikes: currentWentWellLikes
    });
  };

  likeToImprove = (e, index, upordown) => {
    const currentToImproveLikes = this.state.toImproveLikes;
    currentToImproveLikes[index] = currentToImproveLikes[index] + upordown;

    this.setState({
      toImproveLikes: currentToImproveLikes
    });
  };

  likeActionItems = (e, index, upordown) => {
    const currentActionItemLikes = this.state.actionItemLikes;
    currentActionItemLikes[index] = currentActionItemLikes[index] + upordown;

    this.setState({
      actionItemLikes: currentActionItemLikes
    });
  };

  fromWentWellToToImprove = moveIndex => {
    this.setState({
      toImproveItems: [
        ...this.state.toImproveItems,
        this.state.wentWellItems[moveIndex]
      ],
      toImproveLikes: [
        ...this.state.toImproveLikes,
        this.state.wentWellLikes[moveIndex]
      ]
    });

    this.deleteWentWell(moveIndex);
  };

  fromWentWellToAction = moveIndex => {
    this.setState({
      actionItems: [
        ...this.state.actionItems,
        this.state.wentWellItems[moveIndex]
      ],
      actionItemLikes: [
        ...this.state.actionItemLikes,
        this.state.wentWellLikes[moveIndex]
      ]
    });

    this.deleteWentWell(moveIndex);
  };

  fromImproveToWentWell = moveIndex => {
    this.setState({
      wentWellItems: [
        ...this.state.wentWellItems,
        this.state.toImproveItems[moveIndex]
      ],
      wentWellLikes: [
        ...this.state.wentWellLikes,
        this.state.toImproveLikes[moveIndex]
      ]
    });

    this.deleteImprove(moveIndex);
  };

  fromImproveToAction = moveIndex => {
    this.setState({
      actionItems: [
        ...this.state.actionItems,
        this.state.toImproveItems[moveIndex]
      ],
      actionItemLikes: [
        ...this.state.actionItemLikes,
        this.state.toImproveLikes[moveIndex]
      ]
    });

    this.deleteImprove(moveIndex);
  };

  fromActionToWentWell = moveIndex => {
    this.setState({
      wentWellItems: [
        ...this.state.wentWellItems,
        this.state.actionItems[moveIndex]
      ],
      wentWellLikes: [
        ...this.state.wentWellLikes,
        this.state.actionItemLikes[moveIndex]
      ]
    });

    this.deleteAction(moveIndex);
  };

  fromActionToToImprove = moveIndex => {
    this.setState({
      toImproveItems: [
        ...this.state.toImproveItems,
        this.state.actionItems[moveIndex]
      ],
      toImproveLikes: [
        ...this.state.toImproveLikes,
        this.state.actionItemLikes[moveIndex]
      ]
    });

    this.deleteAction(moveIndex);
  };

  render() {
    return (
      <main class="content">
        <Header />
        <div class="RetroBoard">
          <div class="RetroBoardCategory RetroBoardCategory-1">
            <h2>Went Well</h2>
            <button
              type="button"
              class="button button-new"
              onClick={e => this.addWentWell(e)}
            >
              <span class="sr-only">Add to "Went Well"</span>+
            </button>

            <div class="Retro">
              <label class="sr-only" for="retro-label-1">
                Enter retro text
              </label>

              {this.state.wentWellItems.map((wentWell, index) => {
                return (
                  <div>
                    <textarea
                      id="retro-label-6"
                      class="textbox"
                      placeholder="Enter text here"
                      rows="1"
                      index={index}
                      onChange={e => this.changeWell(e.target.value, index)}
                    >
                      {wentWell}
                    </textarea>
                    <div class="ButtonGroup">
                      <button
                        type="button"
                        class="button button-left"
                        onClick={e => this.fromWentWellToAction(index)}
                      >
                        <span class="sr-only">Move Left</span>&lt;
                      </button>
                      <button
                        type="button"
                        class="button button-delete"
                        onClick={e => this.deleteWentWell(index)}
                      >
                        <span class="sr-only">Delete</span>×
                      </button>
                      <button
                        type="button"
                        class="button button-right"
                        onClick={e => this.fromWentWellToToImprove(index)}
                      >
                        <span class="sr-only">Move Right</span>&gt;
                      </button>
                      <button
                        type="button"
                        class="button button-up"
                        onClick={e => this.likeWentWell(e, index, 1)}
                      >
                        <span class="sr-only">Like</span>Like{" "}
                        {this.state.wentWellLikes[index]}
                      </button>
                      <button
                        type="button"
                        class="button button-down"
                        onClick={e => this.likeWentWell(e, index, -1)}
                      >
                        <span class="sr-only">Dislike</span>Dislike
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div class="RetroBoardCategory RetroBoardCategory-2">
          <h2>To Improve</h2>
          <button
            type="button"
            class="button button-new"
            onClick={e => this.addImprove(e)}
          >
            <span class="sr-only">Add to "To Improve"</span>+
          </button>
          <div class="Retro">
            <label class="sr-only" for="retro-label-2">
              Enter retro text
            </label>

            {this.state.toImproveItems.map((improve, index) => {
              return (
                <div>
                  <textarea
                    id="retro-label-2"
                    class="textbox"
                    placeholder="Enter text here"
                    rows="1"
                    index={index}
                    onChange={e => this.changeImprove(e.target.value, index)}
                  >
                    {improve}
                  </textarea>
                  <div class="ButtonGroup">
                    <button
                      type="button"
                      class="button button-left"
                      onClick={e => this.fromImproveToWentWell(index)}
                    >
                      <span class="sr-only">Move Left</span>&lt;
                    </button>
                    <button
                      type="button"
                      class="button button-delete"
                      onClick={e => this.deleteImprove(index)}
                    >
                      <span class="sr-only">Delete</span>×
                    </button>
                    <button
                      type="button"
                      class="button button-right"
                      onClick={e => this.fromImproveToAction(index)}
                    >
                      <span class="sr-only">Move Right</span>&gt;
                    </button>
                    <button
                      type="button"
                      class="button button-up"
                      onClick={e => this.likeToImprove(e, index, 1)}
                    >
                      <span class="sr-only">Like</span>Like{" "}
                      {this.state.toImproveLikes[index]}
                    </button>
                    <button
                      type="button"
                      class="button button-down"
                      onClick={e => this.likeToImprove(e, index, -1)}
                    >
                      <span class="sr-only">Dislike</span>Dislike
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div class="RetroBoardCategory RetroBoardCategory-3">
          <h2>Action Items</h2>
          <button
            type="button"
            class="button button-new"
            onClick={e => this.addAction(e)}
          >
            <span class="sr-only">Add to "Action Items"</span>+
          </button>
          <div class="Retro">
            <label class="sr-only" for="retro-label-4">
              Enter retro text
            </label>

            {this.state.actionItems.map((action, index) => {
              return (
                <div>
                  <textarea
                    id="retro-label-4"
                    class="textbox"
                    placeholder="Enter text here"
                    rows="1"
                    index={index}
                    onChange={e => this.changeAction(e.target.value, index)}
                  >
                    {action}
                  </textarea>
                  <div class="ButtonGroup">
                    <button
                      type="button"
                      class="button button-left"
                      onClick={e => this.fromActionToToImprove(index)}
                    >
                      <span class="sr-only">Move Left</span>&lt;
                    </button>
                    <button
                      type="button"
                      class="button button-delete"
                      onClick={e => this.deleteAction(index)}
                    >
                      <span class="sr-only">Delete</span>×
                    </button>
                    <button
                      type="button"
                      class="button button-right"
                      onClick={e => this.fromActionToWentWell(index)}
                    >
                      <span class="sr-only">Move Right</span>&gt;
                    </button>
                    <button
                      type="button"
                      class="button button-up"
                      onClick={e => this.likeActionItems(e, index, 1)}
                    >
                      <span class="sr-only">Like</span>Like{" "}
                      {this.state.actionItemLikes[index]}
                    </button>
                    <button
                      type="button"
                      class="button button-down"
                      onClick={e => this.likeActionItems(e, index, -1)}
                    >
                      <span class="sr-only">Dislike</span>Dislike
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        Credit and thank you to Matina Patsos and Jamal Taylor for creating the
        HTML/CSS templates used in this project.
      </main>
    );
  }
}

export default App;
